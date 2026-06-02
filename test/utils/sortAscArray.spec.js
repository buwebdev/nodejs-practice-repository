/**
 * Author: Shannon Kueneke
 * Date: June 2, 2026
 * File: sortAscArray.spec.js
 * Description: This script tests the sortAscArray function.
 */
"use strict";

//Import the sortAscArray function from sortAscArray.js file
const { sortAscArray } = require("../../src/utils/sortAscArray");

// The describe() function is a test suite that contains one or more tests
describe("sortAscArray.js", () => {
  // The it() function is a test spec that contains one or more expectations
  it("should sort the given array in ascending order", () => {
    const result = sortAscArray([5, 10, 1, 2]); //call the sortAscArray function with value of [5, 10, 1, 2]
    expect(result).toEqual([1, 2, 5, 10]);
  });

  // The it() function is a test spec that contains one or more expectations
  it("should convert to and compare all array values as strings if array does not contain only numbers before sorting values ascendingly in their original type", () => {
    const result = sortAscArray([500, "apple", 1, -2, 1000, true]); //call the sortAscArray function with value of [500, "apple", 1, -2, 1000, true]
    expect(result).toEqual([-2, 1, 1000, 500, 'apple', true]);
  });

  // The it() function is a test spec that contains one or more expectations
  it("should throw an error if passed value is not an array", () => {
    // Call the sortAscArray function passing a string and expect it to throw an error
    expect(() => sortAscArray("hello")).toThrow("Passed value is not an array");
  });
});

