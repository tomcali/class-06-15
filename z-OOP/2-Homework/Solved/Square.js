var Shape = require("./Shape.js");

function Square(sideLength) {

  if (!(this instanceof Square)) {
    return new Square(sideLength);
  }

  this.sideLength = sideLength;

}

// FIRST, set the .prototype equal to an instance of shape.
Square.prototype = new Shape();

// THEN, reset the constructor on Square.prototype.
Square.prototype.constructor = Square;

module.exports = Square;
