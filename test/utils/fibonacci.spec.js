/**
 * Author: Diana Ruiz Garcia
 * Date: October 22, 2024
 * File: fibonacci.spec.js
 * Description: This script tests the fibonacci function.
 */
'use strict';

// Import the fibonacci function from the fibonacci.js file
const { fibonacci } = require('../../src/utils/fibonacci');

describe('fibonacci.js', () => {
  // Unit test 1: Generate fibonacci sequence of 7 terms
  it('should generate fibonacci sequence of 7 terms', () => {
    const result = []; // Initialize the fibonacci sequence

    // Generate the fibonacci sequence of 7 terms
    for (let i = 0; i <= 7; i++) {
      result[i] = fibonacci(i); // Call the fibonacci function with the value of i
    }

    // The expected result is [0, 1, 1, 2, 3, 5, 8, 13]
    expect(result).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });

  // Unit test 2: Generate fibonacci sequence of 0 terms
  it('should generate fibonacci sequence of 0 terms', () => {
    const result = fibonacci(0); // Call the fibonacci function with the value of 0

    expect(result).toBe(0); // The expected result is 0
  });

  // Unit test 3: Throw an error when generating fibonacci sequence of a negative term
  it('should throw an error when generating fibonacci sequence of a negative term', () => {
    // Call the fibonacci function with the value of -1 and expect it to throw an error
    expect(() => fibonacci(-1)).toThrow('Fibonacci sequence of negative term is not defined');
  });
});