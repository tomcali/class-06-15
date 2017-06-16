var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Animal in an object in a collection
// Animal -> has price
// Animal -> has owner
// Animal -> has name

var AnimalSchema = new Schema({
  _owner: { type: Schema.Types.ObjectId, ref: "Farmhand" },
  cost: Number,
  name: String
});

var Animal = mongoose.model("Animal", AnimalSchema);
module.exports = Animal;
