var express = require("express");

var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();
// Mongoose Connect
var db = "mongodb://localhost/animalFarm";
mongoose.connect(db);

var Animal = require("./model/animal");
var Farmhand = require("./model/farmhand");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.get("/", function(req, res) {
  res.send("hello world");
});

// check how many clicks are saved
app.get("/check", function(req, res) {
  Farmhand
    .find({})
    .exec(function(err, doc) {
      if (err) return (err);
      return res.json(doc);
    });
});
// add to workPoints
app.post("/add", function(req, res) {
  Farmhand
    .find({})
    .exec(function(err, doc) {
      if (err) return (err);
      Farmhand
        .update({
          _id: doc[0]._id
        }, {
          $set: {
            workPoints: (doc[0].workPoints) + 1
          }
        }).exec(function(err) {
          return res.send("done");
        });
    });
});
// find all the animals
app.get("/find", function(req, res) {
  Animal
    .find()
    .exec(function(err, doc) {
      if (err) return (err);
      return res.json(doc);
    });
});
// buy the animal
app.post("/buy", function(req, res) {
  // console.log(req.body);
  Farmhand
    .find({})
    .exec(function(err, doc) {
      if (err) return (err);
      Animal
        .find({
          _id: req.body.id
        })
        .exec(function(err, anim) {
          if (err) return (err);
          // console.log(doc[0]);
          // console.log(anim);
          Farmhand
            .update({
              _id: doc[0]._id
            }, {
              $set: {
                workPoints: (doc[0].workPoints) - anim[0].cost
              }
            }).exec(function(err) {
              Animal
                .update({
                  _id: anim[0]._id
                }, {
                  $set: {
                    _owner: doc[0]._id
                  }
                }).exec(function(err) {
                  if (err) return (err);
                  return res.send("gotet");
                });
            });
        });
    });
});

var port = 3001;
app.listen(port, function() {
  console.log("listenin on port:" + port);
});
