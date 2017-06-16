var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var orderSchema = new Schema({
  address: {
    type: String
  },
  notes: {
    type: String
  },
  items: [{
    name: String
  }]
});

var Order = mongoose.model("Order", orderSchema);
module.exports = Order;
