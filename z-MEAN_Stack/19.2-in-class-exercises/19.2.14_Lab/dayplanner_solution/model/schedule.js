var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Day is an object in a collection
// Schedule has many Days

var scheduleSchema = new Schema({
  days: [{
    type: Schema.Types.ObjectId,
    ref: "Day"
  }]
});


var Schedule = mongoose.model("Schedule", scheduleSchema);
module.exports = Schedule;
