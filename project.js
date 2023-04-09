const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));

// Welcome middleware function
app.use((req, res, next) => {
  console.log("Welcome to Online Tutorial Express App!");
  next();
});

app.get("/", (req, res) => {
  res.render("Home");
});

app.get("/java_projects", (req, res) => {
  res.render("java_projects");
});

app.get("/node_projects", (req, res) => {
  res.render("node_projects");
});

app.get("/python_projects", (req, res) => {
  res.render("python_projects");
});

app.get("/php_projects", (req, res) => {
  res.render("php_projects");
});

app.get("/contact_us", (req, res) => {
  res.render("contact_us");
});

app.listen(3018, () => {
  console.log("Running at Port 3018");
});
