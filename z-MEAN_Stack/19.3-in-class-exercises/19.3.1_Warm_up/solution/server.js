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
  Order.find(function(err, docs) {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    return res.send(docs);
  });
});

app.post("/neworder", function(req, res) {
  var newOrder = new Order(req.body);
  newOrder.save(function(err, doc) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      res.send(doc);
    }
  });
});


var port = 3000;
app.listen(port, function() {
  console.log("listening on port:" + port);
});
