var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");

var app = express();
// Mongoose Connect
var db = "mongodb://localhost/budgettracker";
mongoose.connect(db);

var User = require("./models/User");
var Expense = require("./models/Expense");

app.use(logger("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());


app.get("/", function(req, res) {
  res.send("index.html");
});


app.post("/user", function(req, res) {
  // Get New User With Populated Expenses
  // if user exists return user data else make a new user and return that user's data

});


app.post("/newexpense/:id", function(req, res) {
  // create a new expense with a param of the user's id
  // add it to that user's expenses array

});


app.post("/updatesalary/:id", function(req, res) {
  // update the salary of a user with a param of the user's id

});

app.get("/deleteexpense/:id", function(req, res) {
  // delete an expense with a param of that expense's id.

});


var port = 3000;
app.listen(port, function() {
  console.log("listening on port:" + port);
});
