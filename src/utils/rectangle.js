/**
 * Author: Ben Hilarides
 * Date: 16 January 2026
 * File: rectangle.spec.js
 * Description: This script tests the rectangle area calculation function.
 */
'use strict';

/**
 * Calculates the area of a rectangle.
 * @param {number} length - The length of the rectangle
 * @param {number} width - The width of the rectangle
 * @returns {number} The area of the rectangle
 */
function calculateRectangleArea(length, width) {
    return length * width;
}

module.exports = {
    calculateRectangleArea
}