var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();
// Mongoose Connect
var db = "mongodb://localhost/dayplanner";
mongoose.connect(db);

var Day = require("./model/day");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("hello world");
});

app.get("/find", function(req, res) {
  Day
    .find()
    .exec(function(err, doc) {
      if (err) return (err);
      return res.json(doc);
    });
});

app.post("/grab", function(req, res) {
  Day
    .find({
      dayDate: req.body.key
    })
    .exec(function(err, doc) {
      if (err) return (err);
      console.log(doc);
      return res.json(doc[0]);
    });
});

app.post("/add", function(req, res) {
  // console.log(req.body);
  var newDay = new Day({
    dayDate: req.body.d,
    hours: req.body.o
  });
  // see if today already been recorded
  Day
    .find({
      dayDate: req.body.d
    })
    .exec(function(err, doc) {
      if (err) return (err);
      if (doc.length > 0) {
        // console.log(doc[0]._id);
        Day
          .update({
            _id: doc[0]._id
          }, {
            $set: {
              hours: req.body.o
            }
          }).exec(function(err) {
            if (err) return err;
            return res.send("done");
          });
      }
      else {
        // create new if old doesn't exist
        newDay.save(function(err) {
          if (err) return (err);
          return res.send("fin");
        });
      }
    });
});

var port = 3000;
app.listen(port, function() {
  console.log("listenin on port:" + port);
});
