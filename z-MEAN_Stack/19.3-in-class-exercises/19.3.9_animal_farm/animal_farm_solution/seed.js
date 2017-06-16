var mongoose = require("mongoose");

// Mongoose Connect
var db = "mongodb://localhost/animalFarm";
mongoose.connect(db);

var Animal = require("./model/animal");
var Farmhand = require("./model/farmhand");

var animals = ["chicken", "sheep", "pig", "cow", "bunny", "cat", "dog", "horse"];
var prices = [10, 25, 35, 50, 75, 90, 125, 225];

var hand = new Farmhand({
  workPoints: 0
});
hand.save(function(err) {
  if (err) return (err);
});

for (var a = 0; a < animals.length; a++) {
  var anim = new Animal({
    cost: prices[a],
    name: animals[a]
  });
  anim.save(function(err) {
    if (err) return (err);
  });
}

console.log("Done seed.");
