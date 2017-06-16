var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Day is an object in a collection

// Day belongs to -> Schedule

var daySchema = new Schema({
  dayDate: "",
  hours: ""
});


var Day = mongoose.model("Day", daySchema);
module.exports = Day;
