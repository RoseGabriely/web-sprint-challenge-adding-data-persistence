const express = require("express");
const router = express.Router();
const Tasks = require("./model");

router.get("/", (req, res, next) => {
  Tasks.get()
    .then((task) => {
      res.json(task);
    })
    .catch(next);
});
router.post("/", (req, res, next) => {
  Tasks.create(req.body)
    .then((newTask) => {
      res.json(newTask);
    })
    .catch(next);
});

module.exports = router;
