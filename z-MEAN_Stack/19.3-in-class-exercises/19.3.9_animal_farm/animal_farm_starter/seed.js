var mongoose = require("mongoose");

// Mongoose Connect
var db = "mongodb://localhost/animalFarm";
mongoose.connect(db);

var Animal = require("./model/animal");
var Farmhand = require("./model/farmhand");

var animals = ["chicken", "sheep", "pig", "cow", "bunny", "cat", "dog", "horse"];
var prices = [10, 25, 35, 50, 75, 90, 125, 225];
