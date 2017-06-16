var mongoose = require("mongoose");

// Mongoose Connect
var db = "mongodb://localhost/wk19hw";
mongoose.connect(db);

var User = require("./model/user");
var Item = require("./model/item");
var Comment = require("./model/comment");


// create a user
var user1 = new User({
  name: "Aperture Science",
  money: 500000,
  password: "BlackMesa",
  collectedItems: ["Jade Sword", "Magic Beans"]
});
// within saving the user
user1.save(function(err) {
  if (err) return (err);

  // create comments within the user save
  var comment1 = new Comment({
    commentMsg: "I <3 this gun, my fav!!!",
    _owner: user1.id,
    itemLink: "Portal Gun"
  });
  var comment2 = new Comment({
    commentMsg: "This gun is sickk!!!!!",
    _owner: user1.id,
    itemLink: "Portal Gun"
  });

  comment1.save(function(err) {
    if (err) return (err);
    comment2.save(function(err) {
      if (err) return (err);
    });
  });

  // item creation
  var item1 = new Item({
    itemName: "Portal Gun",
    _owner: user1.id,
    itemDescription: "Really cool gun, great price!",
    itemPrice: 900,
    itemSold: false
  });
  item1.save(function(err) {
    if (err) return (err);

    // with in item creation add the comments in
    Item.update({
      itemName: "Portal Gun"
    }, {
      $push: {
        comments: comment1._id
      }
    }).exec(function(err) {
      if (err) return err;
    });
    Item.update({
      itemName: "Portal Gun"
    }, {
      $push: {
        comments: comment2._id
      }
    }).exec(function(err) {
      if (err) return err;
      console.log("done");
    });
  });

});


// test data seed 2

// create a user
var user2 = new User({
  name: "Bobby",
  money: 4000,
  password: "1234",
  collectedItems: ["WindForce", "Book of Eli", "Mad Maxs Hat"]
});
// within saving the user
user2.save(function(err) {
  if (err) return (err);

  // create comments within the user save
  var comment3 = new Comment({
    commentMsg: "Do you have the boots too?",
    _owner: user2.id,
    itemLink: "Portal Gun"
  });
  comment3.save(function(err) {
    if (err) return (err);
    console.log("done");
  });
});


// test data seed 3
// create a user
var user3 = new User({
  name: "Jackie",
  money: 8000,
  password: "1234"
});
// within saving the user
user3.save(function(err) {
  if (err) return (err);
  console.log("done");
});
