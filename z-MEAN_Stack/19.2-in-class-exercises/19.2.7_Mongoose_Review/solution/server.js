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
  console.log(req.body);
  var newScrap = new Scrap(req.body);

  newScrap.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

app.get("/getscrap", function(req, res) {
  Scrap.findOne({}, function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// U
app.post("/update/:id", function(req, res) {
  Scrap.findOneAndUpdate({
    _id: req.params.id
  }, req.body, function(err, doc) {
    if (err) {
      res.send("err");
    }
    else {
      res.send(doc);
    }
  });
});


app.get("/delete/:id", function(req, res) {
  Scrap.remove({
    _id: req.params.id
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.redirect("/");
    }
  });
});


var port = 3000;
app.listen(port, function() {
  console.log("listening on port:" + port);
});
