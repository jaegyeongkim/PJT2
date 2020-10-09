//----------------------------------
// lib
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const api = require("./routes/index");
const cors = require("cors");
const helmet = require("helmet");
const multer = require("multer");

const { Sequelize } = require("sequelize");
const session = require("express-session");
const { userInfo } = require("os");

// --------------------------------------------
// env
const envJson = require(`${__dirname}/env/env.json`);
const uploadFilePath = envJson.uploadFilePath;

//----------------------------------
// middleware

var app = express();

// 보안
app.use(helmet());
app.use("/api", api);

// cors
const corsOptions = {
  origin: true,
  credentials: true,
};
app.use(cors(corsOptions));

// bodyParser: parse request application/json x-www-form-urlencode
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// models
const models = require("./models/index");

models.sequelize
  .sync()
  .then(() => {
    console.log("DB 연결 성공");
  })
  .catch((err) => {
    console.log("DB 연결 실패");
    console.log(err);
  });

// 업로드
// app.use("/image", express.static("./upload"));
// const upload = multer({ dest: "./upload" });
// const fileUpload = require("express-fileupload");
// app.use(fileUpload());
const imgRouter = require(`${__dirname}/routes/upload`);

//----------------------------------
// routes
app.use(uploadFilePath, express.static(path.join(__dirname + uploadFilePath)));
app.use("/api/", require(`${__dirname}/routes/index`));
app.use("/api/actor", require(`${__dirname}/routes/actor`));
app.use("/api/actor2", require(`${__dirname}/routes/actor2`));
app.use("/api/actor3", require(`${__dirname}/routes/actor3`));
app.use("/api/eye", require(`${__dirname}/routes/eye`));
app.use("/api/eyebrow", require(`${__dirname}/routes/eyebrow`));
app.use("/api/member", require(`${__dirname}/routes/member`));
app.use("/api/mouth", require(`${__dirname}/routes/mouth`));
app.use("/api/movie", require(`${__dirname}/routes/movie`));
app.use("/api/nose", require(`${__dirname}/routes/nose`));
app.use("/api/actorname", require(`${__dirname}/routes/actorname`));
app.use("/api/genre", require(`${__dirname}/routes/genre`));
// app.use("/api/upload", express.static("uploads"));
// app.use("/api/upload", require(`${__dirname}/routes/upload`));
app.use("/api/upload", imgRouter);
app.use("/api/character", require(`${__dirname}/routes/character`));

//----------------------------------
// port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`{init : ${port}}`);
});
