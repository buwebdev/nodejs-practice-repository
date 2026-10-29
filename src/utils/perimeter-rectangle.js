/**
 * Author: Marcellino Modesto
 * Date: 29 October 2026
 * File: perimeter-rectangle
 * Description: Calculates the Perimeter of a Rectangle.
 */
'use strict';

// Calculates the Perimeter of a Rectangle.
// Added an if statement to throw an error for negative integers.
function getRectanglePerimeter(length, width) {
  if (length < 0 || width < 0) {
    throw new Error('Length and width cannot be negative.');
  }

  return 2 * (length + width);
}
// Example numbers:
const l = 10;
const w = 6;
console.log(getRectanglePerimeter(l, w)); // Output: 32

// Export the function for use in other scripts.
module.exports = { getRectanglePerimeter };