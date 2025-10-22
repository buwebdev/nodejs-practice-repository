/**
 * Author: John Kuronya
 * Date: 21 October 2025
 * File: sumArray.js
 * Description: This script calculates the sum of an array of numbers
 */
'use strict';

/**
 * - Throws a TypeError if the input is not an array.
 * - Throws a TypeError if any element is not a finite number.
 * - Returns 0 for an empty array.
 *
 * @param {number[]} numbers - Array of numeric values to sum.
 * @returns {number} The total sum of the array.
 */
function sumArray(numbers) {
  // Validate the top-level input is an array
  if (!Array.isArray(numbers)) {
    throw new TypeError('sumArray() expects an array');
  }

  let total = 0;

  // Loop through the array and accumulate the sum
  for (const value of numbers) {
    // Reject non-numeric or non-finite values to avoid NaN/Infinity issues
    if (typeof value !== 'number' || !Number.isFinite(value)) {
      throw new TypeError('sumArray() array elements must be finite numbers');
    }
    total += value;
  }

  // If the array is empty, total remains 0
  return total;
}

module.exports = { sumArray };
