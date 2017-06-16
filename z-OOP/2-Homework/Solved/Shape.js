// A standard constructor function.
function Shape() {
  this.type = "shape";
}

// Attaching a prototype function.
Shape.prototype.get_type = function get_type() {
  return this.constructor;
};

module.exports = Shape;
