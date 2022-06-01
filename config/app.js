const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");

const indexRouter = require("../routes/index");

//static folder
app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", ejs);

app.use("/", indexRouter);

module.exports = app;
