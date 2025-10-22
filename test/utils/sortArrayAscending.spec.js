/**
 * Author: Dagmawi Megra
 * Date: 21 October 2024
 * File: sortArrayAscending.spec.js
 * Description: This script tests the sortArrayAscending function.
 */
'use strict';

// Import the sortArrayAscending function
const { sortArrayAscending } = require('../../src/utils/sortArrayAscending');


describe('sortArrayAscending.js', () => {

  it('should sort an array of numbers in ascending order', () => {
    const array = [5, 3, 8, 1, 2]; // we are providing an unsorted array
    const sortedArray = sortArrayAscending(array);
    expect(sortedArray).toEqual([1, 2, 3, 5, 8]);
  });


  it('should return an empty array when given an empty array', () => {
    const array = []; // we are providing an empty array
    const sortedArray = sortArrayAscending(array);
    expect(sortedArray).toEqual([]);
  });


  it('should throw an error when the input is not an array', () => {
    expect(() => sortArrayAscending('not an array')).toThrow('Input must be an array');
  });
});

