/**
 * Author: Devin Ledesma
 * Date: 21 October 2025
 * File: calculate-average-array.js
 * Description: This script calculates the average of an array.
 */
"use strict";

// Function that calculates the average of an array.
function calculateAverage(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null; // Check if the arr is an actual array OR checks if the arr.length = 0; If either is true, log null

  const numbers = arr.map(Number); // Convert strings to numbers
  const sum = numbers.reduce((acc, val) => acc + val, 0); // Loops through the array
  return parseFloat(sum / numbers.length); // Returns
}

let arr = [-6, -4, -2, -8, -10]; // Output: -6
// let arr = [6, 4, 2, 8, 10]; // Output: 6
// let arr = [6]; // Output: 6
// arr = []; // Output: null
// let arr = [2, 4, "6", 8]; // Output: 5

let n = arr.length;

console.log(calculateAverage(arr));

module.exports = { calculateAverage };
