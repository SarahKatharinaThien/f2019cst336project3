const express = require("express");
const app = express();
const knockknock = require("knock-knock-jokes");
const joke = knockknock();

app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

// routes
app.get("/", function (req, res) {
   res.render("index.html", {"joke": joke});
});

app.get("/challenges", function (req, res) {
    res.render("challenges.html");
});

app.get("/testing", function (req, res) {
    res.render("testing.html");
});

app.get("/types", function (req, res) {
    res.render("types.html");
});

// server listener
app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Running Express Server...");
});