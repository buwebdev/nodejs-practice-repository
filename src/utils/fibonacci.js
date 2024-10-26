/**
 * Author: Diana Ruiz Garcia
 * Date: October 22, 2024
 * File: fibonacci.js
 * Description: This script generate fibonacci sequence.
 */
'use strict';

// The fibonacci function generate fibonacci sequence
function fibonacci(n) {
  // If the number is less than 0, throw an error
  if (n < 0) {
    throw new Error('Fibonacci sequence of negative term is not defined');
  }

  // If the number is equal or less than 1, return the number
  if (n <= 1) {
    return n;
  }
  // If the number is higher than 1, return the sum of the previous two
  else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

module.exports = { fibonacci }; // Export the fibonacci function for use in other scripts