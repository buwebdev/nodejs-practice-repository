/**
 * Author: Daniella Bertoldi and AI agents
 * Date: 2 June 2026
 * File: fibonacci.js
 * Description: This script generates a Fibonacci sequence.
 */
'use strict';

// The fibonacci function generates a Fibonacci sequence up to a given number of terms
function fibonacci(n) {

  // If the number is less than 0, throw an error
  if (n < 0) {
    throw new Error('Fibonacci sequence cannot be generated for negative numbers');
  }

  // If the number is 0, return an empty array
  if (n === 0) {
    return [];
  }

  // If the number is 1, return the first Fibonacci number
  if (n === 1) {
    return [0];
  }

  // Start the sequence with the first two Fibonacci numbers
  const sequence = [0, 1];

  // Add the next Fibonacci numbers until the sequence reaches n terms
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

module.exports = { fibonacci }; // Export the fibonacci function for use in other scripts