var Shape = require("./Shape.js");

// STEP 1: Create a constructor.
function Pentagon(side1, side2, side3, side4, side5) {

  if (!(this instanceof Pentagon)) {
    return new Pentagon(side1, side2, side3, side4, side5);
  }

  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.side4 = side4;
  this.side5 = side5;

}

// STEP 2: Reset the prototype.
Pentagon.prototype = new Shape();

// STEP 3: Reset the constructor property on Pentagon.prototype.
Pentagon.prototype.constructor = Pentagon;

module.exports = Pentagon;
