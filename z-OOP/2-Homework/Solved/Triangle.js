var Shape = require("./Shape.js");

// Another standard constructor.
function Triangle(side1, side2, side3) {

  if (!(this instanceof Triangle)) {
    return new Triangle(side1, side2, side3);
  }

  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;

}

// FIRST, set the .prototype equal to an instance of shape.
Triangle.prototype = new Shape();

// THEN, reset the constructor on Triangle.prototype.
Triangle.prototype.constructor = Triangle;

module.exports = Triangle;
