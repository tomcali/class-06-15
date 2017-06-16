var mongoose = require("mongoose");

// Mongoose Connect
var db = "mongodb://localhost/recipebook";
mongoose.connect(db);

var Recipe = require("./Recipe");


// This file will seed our local database. You will need one of these for the homework so your app will have some data to use.
// run with "node seed.js"


var newRecipe1 = new Recipe({
  title: "Peanut Butter and Jelly",
  notes: "Crunchy PB only. Obviously.",
  ingredients: [{
    name: "Bread",
    owned: true
  },
    {
      name: "Peanut Butter",
      owned: true
    },
    {
      name: "Jelly",
      owned: false
    }
  ]
});

newRecipe1.save(function(err, doc) {
  if (err) {
    console.log(err);
  }
  else {
    console.log("Recipe 1 Saved");
  }
});


var newRecipe2 = new Recipe({
  title: "A Bowl of Cinnamon Toast Crunch",
  notes: "This counts as a recipe, right? Right?",
  ingredients: [{
    name: "Cinnamon Toast Crunch",
    owned: true
  },
    {
      name: "Milk",
      owned: true
    }
  ]
});

newRecipe2.save(function(err, doc) {
  if (err) {
    console.log(err);
  }
  else {
    console.log("Recipe 2 Saved");
  }
});


var newRecipe3 = new Recipe({
  title: "Coffee",
  notes: "Dat Dev Life",
  ingredients: [{
    name: "Coffee Beans",
    owned: true
  },
    {
      name: "Water",
      owned: true
    }
  ]
});

newRecipe3.save(function(err, doc) {
  if (err) {
    console.log(err);
  }
  else {
    console.log("Recipe 3 Saved");
    process.exit();
  }
});
