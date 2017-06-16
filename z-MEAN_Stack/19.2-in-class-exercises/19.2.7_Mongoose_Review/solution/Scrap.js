var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scrapSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  lastUpdate: {
    type: Date,
    default: Date.now()
  }
});

var Scrap = mongoose.model('Scrap', scrapSchema);
module.exports = Scrap;
