/**
 * Author: Marcellino Modesto
 * Date: 29 October 2026
 * File: perimeter.spec.js
 * Description: Tests the rectangle perimeter calculation function.
 */
'use strict';

const {
  getRectanglePerimeter
} = require('../../src/utils/perimeter-rectangle');

describe('perimeter.js', () => {

  it('should calculate the perimeter with standard positive integers', () => {
    const result = getRectanglePerimeter(10, 6);
    expect(result).toBe(32);
  });

  it('should calculate the perimeter with decimal floating-point values', () => {
    const result = getRectanglePerimeter(10.5, 6.5);
    expect(result).toBe(34);
  });

  it('should calculate the perimeter of a perfect square', () => {
    const result = getRectanglePerimeter(5, 5);
    expect(result).toBe(20);
  });

  it('should throw an error when given negative integers', () => {
  expect(() => getRectanglePerimeter(-10, 6)).toThrow();
  expect(() => getRectanglePerimeter(10, -6)).toThrow();
  expect(() => getRectanglePerimeter(-10, -6)).toThrow();
});

});