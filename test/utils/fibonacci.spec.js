/**
 * Author: Daniella Bertoldi + AI Agents and Reserach
 * Date: 2 June 2026
 * File: fibonacci.spec.js
 * Description: This script tests the fibonacci function.
 */
'use strict';

const { fibonacci } = require('../../src/utils/fibonacci');

// The describe() function is a test suite that contains one or more tests
describe('fibonacci.js', () => {

  // The it() function is a test spec that contains one or more expectations
  it('should generate a Fibonacci sequence with 1 term', () => {
    const result = fibonacci(1);
    expect(result).toEqual([0]);
  });

  // The it() function is a test spec that contains one or more expectations
  it('should generate a Fibonacci sequence with 5 terms', () => {
    const result = fibonacci(5);
    expect(result).toEqual([0, 1, 1, 2, 3]);
  });

  // The it() function is a test spec that contains one or more expectations
  it('should throw an error when generating a Fibonacci sequence for a negative number', () => {
    expect(() => fibonacci(-1)).toThrow('Fibonacci sequence cannot be generated for negative numbers');
  });
});
