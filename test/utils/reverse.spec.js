/**
 * Author: Noah Hamblen
 * Date: 21 October 2025
 * File: reverse.spec.js
 * Description: This tests a script that reverses a string
 */

// Import the reverseString function from the reverse.js file
const reverseString = require("../../src/utils/reverse");

/**
 * Test 1: Verify that a normal word is reversed correctly
 */
test("should reverse a normal word", () => {
  expect(reverseString("hello")).toBe("olleh");
});

/**
 * Test 2: Verify that the function correctly reverses strings with spaces
 */
test("should reverse a string with spaces", () => {
  expect(reverseString("Hello World")).toBe("dlroW olleH");
});

/**
 * Test 3: Verify that an empty string returns an empty string
 */
test("should handle an empty string", () => {
  expect(reverseString("")).toBe("");
});
