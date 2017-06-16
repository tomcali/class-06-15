var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Animal in an object in a collection
// Animal -> has price
// Animal -> has owner
// Animal -> has name

var AnimalSchema = new Schema({

});

var Animal = mongoose.model("Animal", AnimalSchema);
module.exports = Animal;
