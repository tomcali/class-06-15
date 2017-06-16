var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");

var app = express();
// Mongoose Connect
var db = "mongodb://localhost/scrapnotes";
mongoose.connect(db);

var Scrap = require("./scrap");

app.use(logger("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
  extended: false
}));


app.get("/", function(req, res) {
  res.send("index.html");
});

app.post("/submit", function(req, res) {
  // ROUTE TO CREATE


});

app.get("/getscrap", function(req, res) {
  // ROUTE TO GET *ONE* SCRAP


});

app.post("/update/:id", function(req, res) {
  // ROUTE TO FIND AND UPDATE ONE SCRAP


});

app.get("/delete/:id", function(req, res) {
  // ROUTE TO DELETE ONE SCRAP


});


var port = 3000;
app.listen(port, function() {
  console.log("listening on port:" + port);
});
