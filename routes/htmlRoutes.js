const path = require("path");
const express = require('express');
const router = express.Router();


  router.get("/index", function(req, res) {
    console.log("dirme = "+path.join(__dirname, "../public/index.html"))
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

module.exports = router;