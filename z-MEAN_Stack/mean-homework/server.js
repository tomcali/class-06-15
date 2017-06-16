var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();
// Mongoose Connect
var db = "mongodb://localhost/wk19hw";
mongoose.connect(db);

var User = require("./model/user");
var Item = require("./model/item");
var Comment = require("./model/comment");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.get("/", function(req, res) {
  res.send("hello world");
});

// find user check password
app.post("/login", function(req, res) {
  console.log(req.body);
  User
    .find({
      name: req.body.userName
    })
    .exec(function(err, doc) {
      if (err) return (err);
      if (doc.length > 0) {
        // check password
        // console.log(doc);
        if (req.body.userPassword === doc[0].password) {
          return res.json(doc);
        }
        res.statusCode = 401;
        return res.send("None shall pass");
      }
      res.statusCode = 401;
      return res.send("None shall pass");
    });
  // res.send('gotit');
});
// find item and send back items with comments
app.get("/find", function(req, res) {
  Item
    .find()
    .populate("_owner")
    .populate("comments")
    .exec(function(err, doc) {
      if (err) return (err);
      // res.json(doc);
      Comment
        .find()
        .populate("_owner")
        .exec(function(err, com) {
          if (err) return (err);
          // return back custom obj format of item and comment
          var data = {
            item: doc,
            comment: com
          };
          return res.json(data);
        });
    });
});
// update item to sold, update user money
app.post("/buy", function(req, res) {
  // console.log(req.body);
  // abit of cb hell
  Item
    .update({
      _id: req.body.itemId
    }, {
      $set: {
        itemSold: true
      }
    }).exec(function(err) {
      if (err) return err;
      Item
        .find({
          _id: req.body.itemId
        })
        .exec(function(err, item) {
          User
            .update({
              _id: req.body.user._id
            }, {
              $push: {
                collectedItems: item[0].itemName
              }
            }).exec(function(err) {
              if (err) return (err);
              User
                .find({
                  _id: req.body.user._id
                })
                .exec(function(err, user) {
                  // console.log(user);
                  var balance = user[0].money;
                  var updateBalance = balance - item[0].itemPrice;
                  User.update({
                    _id: req.body.user._id
                  }, {
                    $set: {
                      money: updateBalance
                    }
                  }).exec(function(err) {
                    // console.log(user);
                    User
                      .find({
                        _id: req.body.user._id
                      })
                      .exec(function(err, freshUser) {
                        if (err) return (err);
                        return res.json(freshUser);
                      });
                  });
                });
            });
        });
    });
});
// add comment to item with user
app.post("/add", function(req, res) {
  console.log(req.body);

  var newComment = new Comment({
    commentMsg: req.body.msg,
    _owner: req.body.ownerId,
    itemLink: req.body.itemName
  });
  newComment.save(function(err) {
    if (err) return (err);
    Item.update({
      id: req.body.id
    }, {
      $push: {
        comments: newComment._id
      }
    }).exec(function(err) {
      if (err) return err;
      res.send("fin");
    });
  });
});
// create new item save to db
app.post("/list", function(req, res) {
  // console.log(req.body.owner);
  // item creation
  User
    .find({
      _id: req.body.owner
    })
    .exec(function(err, user) {
      if (err) return (err);

      // console.log(user);
      var seller = user[0];
      var newItem = new Item({
        itemName: req.body.name,
        _owner: seller.id,
        itemDescription: req.body.description,
        itemPrice: req.body.price,
        itemSold: false
      });
      // console.log(newItem);
      newItem.save(function(err) {
        if (err) return (err);
        res.send("Listed");
      });
    });

});

var port = 3000;
app.listen(port, function() {
  console.log("listenin on port:" + port);
});
