const express = require("express");
const app = express.Router();
const { Member } = require("../models");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
// const fileUpload = require("express-fileupload");
const cors = require("cors");
app.use(cors());

// 멤버 전체 조회
app.get("/", async function (req, res) {
  Member.findAll()
    .then((data) => res.json(data))
    .catch((err) => res.status(404).send(err));
});

// 멤버 추가
app.post("/signup", async function (req, res) {
  // 이미 로그인이 되어있다면 이미 되어있다고
  if (req.headers.token) {
    res.status(403).json({ message: "이미 로그인 되어있습니다." });
  } else {
    const reqeustData = req.body;
    // email 중복 확인
    await Member.findOne({
      where: { email: reqeustData.email },
    }).then((member) => {
      // 중복이면 중복 메세지 보내기
      if (member) {
        res.status(403).send({ message: "이미 존재하는 아이디입니다." });
      } else {
        // 비밀번호 확인하기
        if (reqeustData.password_1 !== reqeustData.password_2) {
          res.status(403).send({ message: "비밀번호 확인이 잘못되었습니다." });
        } else {
          Member.create({
            email: reqeustData.email,
            password: reqeustData.password,
            gender: reqeustData.gender,
            name: reqeustData.name,
            birth: reqeustData.birth,
            image: reqeustData.image,
          });
          res.status(200).send({
            message: "이메일 인증 후 사용해주세요.",
          });
        }
      }
    });
  }
});
module.exports = app;
