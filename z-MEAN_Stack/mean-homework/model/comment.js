var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Comments in an object in a collection
// Comments belongs to -> Users
// Comments also belongs to -> Items
// _userComment is and object references a User //find owner

var commentSchema = new Schema({
  _owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  itemLink: String,
  commentMsg: String
});

var Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
