const express = require("express");
const empRoutes = express.Router();

const mongoose = require("mongoose");
const bluebird = require("bluebird");

mongoose.Promise = bluebird;

empRoutes.get("/unemployed", (req, res) => {
  Robots.find({ job: null }).toArray((err, foundRobots) => {
    err
      ? res.status(500).send(err)
      : res.render("index", { users: foundRobots });
  });
});

empRoutes.get("/employed", (req, res) => {
  Robots.find({
    job: { $not: { $in: [null] } }
  }).toArray((err, foundRobots) => {
    err
      ? res.status(500).send(err)
      : res.render("index", { users: foundRobots });
  });
});

module.exports = empRoutes;
