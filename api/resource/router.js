const express = require("express");
const router = express.Router();
const Resources = require("./model");

router.get("/", (req, res, next) => {
  Resources.get()
    .then((resource) => {
      res.json(resource);
    })
    .catch(next);
});
router.post("/", (req, res, next) => {
  res.json("connected?2");
});

module.exports = router;
