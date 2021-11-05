const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("connected?");
});
router.post("/", (req, res, next) => {
  res.json("connected?2");
});

module.exports = router;
