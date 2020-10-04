<<<<<<< HEAD
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express.Router();
const { Actor } = require("../models");
const cors = require("cors");
const multer = require("multer");
app.use(cors());
=======
// const express = require("express");
// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");
// const app = express.Router();
// const cors = require("cors");
// app.use(cors());
>>>>>>> de83a1b1be07942d762d2ac2a505beeffef36322

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

<<<<<<< HEAD
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
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./image"); // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // cb 콜백함수를 통해 전송된 파일 이름 설정
  },
});

const upload = multer({ storage: storage });

app.post("/", upload.single("img"), (req, res) => {
  const reqeustData = req.body;
  console.log(req.body);
  Actor.create({
    gender: reqeustData.gender,
    name: reqeustData.name,
    birth: reqeustData.birth,
    image: reqeustData.image,
    face: reqeustData.face,
    movie: reqeustData.movie,
    video: reqeustData.video,
  });
  res.send({
    fileName: req.body.name + ".jpg",
  });
});

module.exports = app;
=======
// app.post("/", upload.single("img"), async function (req, res, next) {
//   res.send({
//     fileName: req.file.filename,
//   });
// });

// module.exports = router;
>>>>>>> de83a1b1be07942d762d2ac2a505beeffef36322
