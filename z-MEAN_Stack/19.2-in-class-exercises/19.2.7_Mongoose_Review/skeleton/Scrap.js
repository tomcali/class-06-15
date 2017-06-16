var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var scrapSchema = new Schema({
  // SCHEMA SHOULD HAVE A REQUIRED "title", A REQUIRED "body", AND A "lastUpdate" THAT DEFAULTS TO THE CURRENT DATE


});

var Scrap = mongoose.model("Scrap", scrapSchema);
module.exports = Scrap;
