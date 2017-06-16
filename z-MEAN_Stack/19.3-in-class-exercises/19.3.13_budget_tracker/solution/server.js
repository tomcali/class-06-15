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
  res.send(index.html);
});


// Get New User With Populated Expenses
app.post("/user", function(req, res) {
  req.body.username = req.body.username.toLowerCase();
  User.findOne({
    username: req.body.username
  })
    .populate("expenses")
    .exec(function(err, user) {
      if (err) {
        console.log("error");
        res.send(err);
      }
      else if (user === null) {
        console.log(req.body);
        var newUser = new User(req.body);
        newUser.save(function(err, newUser) {
          if (err) {
            console.log(err);
            res.send(err);
          }
          else {
            res.send(newUser);
          }
        });
      }
      else {
        console.log(user);
        res.send(user);
      }
    });
});


app.post("/newexpense/:id", function(req, res) {
  var expenseWithUserId = req.body;
  expenseWithUserId._user = req.params.id;

  var newExpense = new Expense(expenseWithUserId);
  newExpense.save(function(err, doc) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      User.findOneAndUpdate({
        _id: req.params.id
      }, {
        $push: {
          expenses: doc._id
        }
      }, {
        new: true
      }, function(err, updatedUser) {
        if (err) {
          console.log(err);
        }
        else {
          res.send(updatedUser);
        }
      });
    }
  });
});


app.post("/updatesalary/:id", function(req, res) {
  console.log(req.params.id);
  User.findOneAndUpdate({
    _id: req.params.id
  }, {
    salary: req.body.salary
  }, {
    new: true
  }, function(err, doc) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      console.log(doc);
      res.send(doc);
    }
  });
});

app.get("/deleteexpense/:id", function(req, res) {
  Expense.findByIdAndRemove(req.params.id, function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      User.findOneAndUpdate(doc._user, {
        $pull: {
          expenses: doc._id
        }
      }, function(err, doc2) {
        if (err) {
          console.log(err);
          res.send(doc2);
        }
        else {
          res.send(doc2);
        }
      });
    }
  });
});


var port = 3000;
app.listen(port, function() {
  console.log("listening on port:" + port);
});
