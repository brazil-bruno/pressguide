const express = require("express");
const router = express.Router();

router.get("/categories", (req, res) => {
  res.send("Category Route");
});

router.get("/admin/categories/new", (req, res) => {
  res.send("Route to create a new category");
});

module.exports = router;
