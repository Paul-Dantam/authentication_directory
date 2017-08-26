const express = require("express");
const indexRoutes = express.Router();

const mongoose = require("mongoose");
const bluebird = require("bluebird");

mongoose.Promise = bluebird;

indexRoutes.get("/", (req, res) => {
  Robots.find({}).toArray((err, foundRobots) => {
    err
      ? res.status(500).send(err)
      : res.render("index", { users: foundRobots });
  });
});

module.exports = indexRoutes;
