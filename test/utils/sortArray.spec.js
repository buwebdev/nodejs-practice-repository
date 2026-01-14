/**
 * Author: Mariea Nies
 * Date: January 13 2026
 * File: sortArray.spec.js
 * Description: This script tests the sort array function.
 */
'use strict'

const { sortArrayAscending } = require('../../src/utils/sortArray');

describe('sortArray.js', () => {
    it('should sort an array of numbers in ascending order', () => {
        const result = sortArrayAscending([3, 1, 4, 2]);
        expect(result).toEqual([1, 2, 3, 4]);
    });

    it('should handle an already sorted array', () => {
        const result = sortArrayAscending([1, 2, 3, 4]);
        expect(result).toEqual([1, 2, 3, 4]);
    });

    it('should handle negative numbers correctly', () => {
        const result = sortArrayAscending([0, -5, 10, -2]);
        expect(result).toEqual([-5, -2, 0, 10]);
    });
    
})