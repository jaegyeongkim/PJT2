const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express.Router();
const { Actor } = require("../models");
const cors = require("cors");
const multer = require("multer");
// const fileUpload = require("express-fileupload");
app.use(cors());

// fs.readdir("uploads", (error) => {
//   // uploads 폴더 없으면 생성
//   if (error) {
//     fs.mkdirSync("uploads");
//   }
// });

// 이미지 업로드
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "../frontend/build/static/img");
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + ext);
    },
  }),
  limits: { fileSize: 300 * 1024 * 1024 },
});
// 이미지 업로드를 위한 API
// upload의 single 메서드는 하나의 이미지를 업로드할 때 사용
// app.post("/", upload.single("img"), (req, res) => {
//   console.log(req.file);
//   res.json({ url: `/img/${req.file.filename}` });
// });

// let storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, "upload/");
//   },
//   filename: function (req, file, callback) {
//     let extension = path.extname(file.originalname);
//     let basename = path.basename(file.originalname, extension);
//     callback(null, basename + "-" + Date.now() + extension);
//   },
// });

// // 1. multer 미들웨어 등록
// let upload = multer({
//   storage: storage,
// });

// app.get("/show", function (req, res, next) {
//   res.render("board");
// });

// app.post("/create", upload.single("imgFile"), function (req, res, next) {
//   // 3. 파일 객체
//   let file = req.files.imgFile;
//   console.log(file);
//   // 4. 파일 정보
//   let result = {
//     originalName: file.name,
//     size: file.size,
//   };

//   res.json(result);
// });
// const express = require("express");
// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");
// const app = express.Router();
// const cors = require("cors");
// app.use(cors());

// fs.readdir("static/img/actor", (error) => {
//   // uploads 폴더 없으면 생성
//   if (error) {
//     console.log(error);
//     // fs.mkdirSync("uploads");
//   }
// });

// const upload = multer({
//   storage: multer.diskStorage({
//     destination(req, file, cb) {
//       cb(null, "static/img/actor/");
//     },
//     filename(req, file, cb) {
//       const ext = path.extname(file.originalname);
//       cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
//     },
//   }),
//   limits: { fileSize: 5 * 1024 * 1024 },
// });
// 이미지 업로드를 위한 API
// upload의 single 메서드는 하나의 이미지를 업로드할 때 사용
// router.post("/upload", upload.single("img"), (req, res) => {
//   console.log(req.file);
//   res.json({ url: `/img/${req.file.filename}` });
// });

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "upload/");
//     },
//     filename: function (req, file, cb) {
//       cb(null, new Date().valueOf() + path.extname(file.originalname));
//     },
//   }),
// });

// app.get("/filepage", function (req, res) {
//   console.log("파일 페이지 나와라")

//   //파일 가져올 위치
//   var path = __dirname + '/../' + 'uploads/images/'

//   fs.readFile('file.html', 'utf-8', function (error, data) {
//   var queryString = 'select * from myfile'
//   getConnection().query(queryString, function (error, result) {
//   if (error) {
//   console.log("파일가져올때 에러 발생" + error);
//   return
//   }
//   res.send(ejs.render(data, {
//   data: result
//   }));
//   });
//   })

// //파일 저장위치와 파일이름 설정
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     //파일이 이미지 파일이면
//     if (
//       file.mimetype == "image/jpeg" ||
//       file.mimetype == "image/jpg" ||
//       file.mimetype == "image/png"
//     ) {
//       console.log("이미지 파일이네요");
//       cb(null, "uploads/images");
//       //텍스트 파일이면
//     } else if (
//       file.mimetype == "application/pdf" ||
//       file.mimetype == "application/txt" ||
//       file.mimetype == "application/octet-stream"
//     ) {
//       console.log("텍스트 파일이네요");
//       cb(null, "uploads/texts");
//     }
//   },
//   //파일이름 설정
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });
// var upload = multer({ storage: storage });
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "upload/"); // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname); // cb 콜백함수를 통해 전송된 파일 이름 설정
//   },
// });

// const upload = multer({ storage: storage });

// app.post("/", upload.single("img"), (req, res) => {
//   const reqeustData = req.body;
//   console.log(req.body);
//   Actor.create({
//     gender: reqeustData.gender,
//     name: reqeustData.name,
//     birth: reqeustData.birth,
//     image: reqeustData.image,
//     face: reqeustData.face,
//     movie: reqeustData.movie,
//     video: reqeustData.video,
//   });
//   res.send({
//     fileName: req.body.name + ".jpg",
//   });
// });
// app.post("/face", function)
app.post(
  "/account",
  upload.fields([{ name: "profile_img" }, { name: "profile_video" }]),
  function (req, res, next) {
    const reqeustData = req.body;
    console.log(req.files.profile_img);
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
          face: reqeustData.face,
          // movie: reqeustData.movie,
          video: req.files.profile_video[0].originalname,
        });
      }
      console.log("/account ", req.body);
      res.send({ msg: "등록이 완료되었습니다." });
    });
  }
);

module.exports = app;
