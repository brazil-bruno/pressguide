const express = require("express");
const router = express.Router();

router.get("/articles", (req, res) => {
  res.send("Article Route");
});

router.get("/admin/articles/new", (req, res) => {
  res.send("Route to create a new article");
});

module.exports = router;
