var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// User is an object in a collection
// User has many -> Items
// User has many -> Comments
// ownedItems is an array of ids references Items schema (populate-able) //related items
// postedComments is an array of ids references Comments schema (populate-able) //related comments

var userSchema = new Schema({
  name: String,
  money: Number,
  password: String,
  collectedItems: [{
    type: String
  }]
});

var User = mongoose.model("User", userSchema);
module.exports = User;
