const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.render("index.ejs", { page: "home" }));
router.get("/work", (req, res) => res.render("index.ejs", { page: "work" }));
router.get("/about", (req, res) => res.render("index.ejs", { page: "about" }));
router.get("/contact", (req, res) =>
  res.render("index.ejs", { page: "contact" })
);
router.get("/resume", (req, res) =>
  res.render("index.ejs", { page: "resume" })
);

module.exports = router;
