const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const app = express.Router();
const cors = require("cors");
app.use(cors());

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
//       cb(null, "uploads/");
//     },
//     filename(req, file, cb) {
//       const ext = path.extname(file.originalname);
//       cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
//     },
//   }),
//   limits: { fileSize: 5 * 1024 * 1024 },
// });
// // 이미지 업로드를 위한 API
// // upload의 single 메서드는 하나의 이미지를 업로드할 때 사용
// router.post("/upload", upload.single("img"), (req, res) => {
//   console.log(req.file);
//   res.json({ url: `/img/${req.file.filename}` });
// });

app.post("/", upload.single("img"), async function (req, res, next) {
  res.send({
    fileName: req.file.filename,
  });
});

module.exports = router;
