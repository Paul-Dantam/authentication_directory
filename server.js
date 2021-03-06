const express = require("express");
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const bodyParser = require("body-parser");
const session = require("express-session");
const logger = require("morgan");
const bcrypt = require("bcryptjs");
const mustacheExpress = require("mustache-express");
const path = require("path");
const checkAuth = require("./middlewares/checkAuth");
const sessionConfig = require("./sessionConfig");
const indexRoutes = require("./routes/indexRoutes");
const profileRoutes = require("./routes/profileRoutes");
const empRoutes = require("./routes/employmentRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const port = process.env.PORT || 8000;

const app = express();

mongoose.Promise = bluebird;
mongoose.connect("mongodb://localhost:27017/userDirectory");

//templating engine
app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

//middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session(sessionConfig));

//routes
app.use("/", indexRoutes);
app.use("/profile", profileRoutes);
app.use("/employment", empRoutes);
app.use("/auth", authRoutes);
app.use("/user", checkAuth, userRoutes);

app.listen(port, function() {
  console.log(`server is running on port ${port}!`);
});
