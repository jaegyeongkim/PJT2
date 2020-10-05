const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express.Router();
const { Actor } = require("../models");
const cors = require("cors");
const multer = require("multer");
// const PythonShell = require("python-shell");
let { PythonShell } = require("python-shell");

app.use(cors());

fs.readdir("uploads", (error) => {
  // uploads 폴더 없으면 생성
  if (error) {
    fs.mkdirSync("uploads");
  }
});

// 이미지 업로드
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "uploads/");
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + ext);
    },
  }),
  limits: { fileSize: 300 * 1024 * 1024 },
});

app.post(
  "/account",
  upload.fields([{ name: "profile_img" }, { name: "profile_video" }]),
  function (req, res, next) {
    const reqeustData = req.body;
    var options = {
      mode: "text",

      pythonPath: "",

      pythonOptions: ["-u"], // get print results in real-time

      scriptPath: "./routes",

      args: [],
    };
    PythonShell.run("test.py", options, function (err, results) {
      if (err) throw err;

      console.log("results: %j", results);
      console.log(results);

      // 중복 확인
      Actor.findOne({
        where: { id: reqeustData.id },
      }).then((actor) => {
        // 중복이면 중복 메세지 보내기
        if (actor) {
          res.status(403).send({ msg: "이미 등록하셨습니다." });
        } else {
          Actor.create({
            id: reqeustData.id,
            gender: reqeustData.gender,
            name: reqeustData.name,
            image: req.files.profile_img[0].originalname,
            face: results,
            // movie: reqeustData.movie,
            video: req.files.profile_video[0].originalname,
          });
        }
        console.log("/account ", req.body);
        res.send({ msg: "등록이 완료되었습니다." });
      });
    });
  }
);

module.exports = app;
