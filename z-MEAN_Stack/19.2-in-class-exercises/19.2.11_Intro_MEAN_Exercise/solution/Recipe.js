var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var recipeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  notes: {
    type: String
  },
  ingredients: [{
    name: String,
    owned: {
      type: Boolean,
      default: false
    }
  }]
});

var Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
