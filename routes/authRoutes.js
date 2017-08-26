const express = require("express");
const authRoutes = express.Router();
const Robot = require("../models/Robot");
const bcrypt = require("bcryptjs");

// authRoutes.get("/signup", (req, res) => {
//   res.render("signup");
// });

// authRoutes.post("/signup", (req, res) => {
//   let newRobot = new Robot(req.body);
//   let salt = bcrypt.genSaltSync(10);
//   newRobot.password = bcrypt.hashSync(newRobot.password, salt);
//   newRobot
//     .save()
//     .then(
//       savedRobot =>
//         !savedRobot
//           ? res.status(500).send("Error saving Robot!")
//           : res.redirect("/auth/login")
//     )

// authRoutes.get("/login", (req, res) => {
//   res.render("login");
// });

// authRoutes.post("/login", (req, res) => {
//   let reqUsername = req.body.username;
//   let reqPassword = req.body.password;

//   User.findOne({ username: reqUsername }).then(function(foundUser) {
//     console.log("foundUser: ", foundUser);
//     if (!foundUser) {
//       return res.render("login", { errors: ["No user found."] });
//     }

//     const authorized = bcrypt.compareSync(reqPassword, foundUser.password);

//     if (!authorized) {
//       return res.render("login", { errors: ["Password does not match."] });
//     }

//     delete foundUser.password;
//     req.session.user = foundUser;
//     res.redirect("/");
//   });
// });

module.exports = authRoutes;
