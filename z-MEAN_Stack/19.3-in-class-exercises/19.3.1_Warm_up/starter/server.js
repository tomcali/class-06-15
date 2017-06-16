var express = require("express");

var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");

var app = express();
// Mongoose Connect
var db = "mongodb://localhost/orders";
mongoose.connect(db);

var Order = require("./Order");

app.use(logger("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());


app.get("/", function(req, res) {
  res.send("index.html");
});


app.get("/orders", function(req, res) {
  // find all orders


});

app.post("/neworder", function(req, res) {
  // create a new order


});


var port = 3000;
app.listen(port, function() {
  console.log("listening on port:" + port);
});
