/**
 * Author: Ben Hilarides
 * Date: 16 January 2026
 * File: rectangle.spec.js
 * Description: This script tests the rectangle area calculation function.
 */
'use strict';

const { calculateRectangleArea } = require('../../src/utils/rectangle'); // Import the rectangle area function from the rectangle.js file

// The describe() function is a test suite that contains one or more tests
describe('rectangle.js', () => {

    // Test for calculating area with positive integers
    it('should calculate area of 5 x 10 as 50', () => {
        const result = calculateRectangleArea(5, 10);
        expect(result).toBe(50);
    });

    // Test for calculating area of a square
    it('should calculate area of 5 x 5 as 25', () => {
        const result = calculateRectangleArea(5, 5);
        expect(result).toBe(25);
    });

    // Test for calculating area with decimal values
    it('should calculate are of 3.5 x 2.5 as 8.75', () => {
        const result = calculateRectangleArea(3.5, 2.5);
        expect(result).toBe(8.75);
    });
})