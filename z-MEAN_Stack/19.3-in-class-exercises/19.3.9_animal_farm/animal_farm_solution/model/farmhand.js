var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Farmhand in an object in a collection
// Farmhand -> has many collectedAnimals
// Farmhand -> has workPoints

var farmhandSchema = new Schema({
  workPoints: Number
});

var Farmhand = mongoose.model("Farmhand", farmhandSchema);
module.exports = Farmhand;
