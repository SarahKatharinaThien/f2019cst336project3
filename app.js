const express = require("express");
const app = express();

app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

// routes
app.get("/", function (req, res) {
   res.render("index.html");
});

app.get("/index", function (req, res) {
    res.render("index.html");
});

app.get("/about", function (req, res) {
    res.render("challenges.html");
});

app.get("/contact", function (req, res) {
    res.render("testing.html");
});

app.get("/joke", function (req, res) {
    res.render("types.html");
});

// server listener
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Running Express Server...");
});