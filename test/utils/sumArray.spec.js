/**
 * Author: John Kuronya
 * Date: 21 October 2025
 * File: sumarray.spec.js
 * Description: This script tests the sumArray function.
 */
'use strict';

const { sumArray } = require('../../src/utils/sumarray');

describe('sumArray', () => {
  // 1) Sums a list of positive integers
  it('sums positive integers correctly', () => {
    // Arrange
    const input = [1, 2, 3, 4, 5];
    // Act
    const result = sumArray(input);
    // Assert
    expect(result).toBe(15);
  });

  // 2) Supports negatives and floats
  it('handles negative and floating-point numbers', () => {
    // Arrange
    const input = [2.5, -1, 3.25, -0.75];
    // Act
    const result = sumArray(input);
    // Assert
    expect(result).toBeCloseTo(4.0, 10); // 2.5 - 1 + 3.25 - 0.75 = 4.0
  });

  // 3) Blocks invalid elements (non-finite or non-number)
  it('throws TypeError if any element is not a finite number', () => {
    // Arrange: several invalid arrays to check
    const badInputs = [
      [1, 2, '3'],  // string
      [NaN, 1],     // NaN
      [Infinity, 2],// Infinity
      [{}],         // object
    ];

    // Act & Assert: each invalid array should cause a TypeError
    for (const arr of badInputs) {
      expect(() => sumArray(arr)).toThrow(TypeError);
    }
  });
});
