/**
 * Author: Professor Krasso
 * Date: 13 September 2024
 * File: index.js
 * Description: This script is the main entry point for the
 */

// Import the factorial function from the factorial.js file
const { factorial } = require('./utils/factorial');

// Import the rectangle area function from the rectangle.js file
const { calculateRectangleArea } = require('./utils/rectangle');

// The main() function calculates the factorial of 5 and logs the result to the console
async function main () {
  const result = factorial(5); // Call the factorial function with the value of 5
  console.log('factorial of 5 is', result); // Log the result to the console

  const area = calculateRectangleArea(5, 10); // Call the calculateRectangleArea function
  console.log('area of rectangle (5 x 10) is', area); // Log the result to the console
}

main(); // Call the main function to calculate the factorial of 5, and also calculate the area of a 5 x 10 rectangle.