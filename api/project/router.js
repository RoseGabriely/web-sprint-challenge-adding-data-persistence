const express = require("express");
const router = express.Router();
const Projects = require("./model.js");

router.get("/", (req, res, next) => {
  Projects.get()
    .then((projects) => {
      res.json(projects);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Projects.insert(req.body)
    .then((newProj) => {
      res.json(newProj);
    })
    .catch(next);
});

module.exports = router;
