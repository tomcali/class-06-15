var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Item is an object in a collection
// Items belongs to -> User
// Items has many -> Comments
// _userOwned is and object references a User //find owner
// itemComments is an array of ids references Comments schema (populate-able) //related comments

var itemSchema = new Schema({
  _owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  itemName: String,
  itemDescription: String,
  itemPrice: Number,
  itemSold: Boolean,
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }]
});


var Item = mongoose.model("Item", itemSchema);
module.exports = Item;
