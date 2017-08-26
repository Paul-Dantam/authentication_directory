const express = require("express");
const profileRoutes = express.Router();

const mongoose = require("mongoose");
const bluebird = require("bluebird");

mongoose.Promise = bluebird;

profileRoutes.get("/:id", (req, res) => {
  Robots.findOne({ _id: ObjectId(req.params.id) }, (err, foundRobot) => {
    if (err) res.status(500).send(err);
    if (!foundRobot) res.send("No User Found");
    res.render("profile", { data: foundRobot });
  });
});

profileRoutes.get("/:skillName", (req, res) => {
  Robots.find({ skills: req.params.skillName }).toArray((err, foundRobots) => {
    if (err) {
      res.status(500).send(err);
    }
    res.render("index", { users: foundRobots });
  });
});

profileRoutes.get("/:countryName", (req, res) => {
  Robots.find({
    "address.country": req.params.countryName
  }).toArray((err, foundRobots) => {
    if (err) {
      res.status(500).send(err);
    }

    res.render("index", { users: foundRobots });
  });
});

module.exports = profileRoutes;
