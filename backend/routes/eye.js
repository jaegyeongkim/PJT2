const express = require("express");
const app = express.Router();
const db = require("../models");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

// 눈 전체 조회
app.get("/", async function (req, res) {
  db.Eye.findAll()
    .then((data) => res.json(data))
    .catch((err) => res.status(404).send(err));
});

module.exports = app;