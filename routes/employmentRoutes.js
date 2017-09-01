const express = require("express");
const empRoutes = express.Router();
const Robot = require("../models/Robot");

empRoutes.get("/unemployed", (req, res) => {
  Robot.find({ job: null }).then(foundRobots => {
    !foundRobots
      ? res.status(500).send("No matching Robots")
      : res.render("index", { robots: foundRobots });
  });
});

empRoutes.get("/employed", (req, res) => {
  Robot.find({ job: { $not: { $in: [null] } } }).then(foundRobots => {
    !foundRobots
      ? res.status(500).send("No matching Robots")
      : res.render("index", { robots: foundRobots });
  });
});

module.exports = empRoutes;
