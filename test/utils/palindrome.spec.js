/**
 * Author: Amanda Ruff
 * Date: 2 June 2026
 * File: palindrome.spec.js
 * Description: This script tests the isPalindrome function.
 */
'use strict';

const { isPalindrome } = require('../../src/utils/palindrome'); // Import the isPalindrome function

// The describe() function is a test suite that contains one or more tests
describe('palindrome.js', () => {

  // The it() function is a test spec that checks a valid palindrome
  it('should return true when the string is a palindrome', () => {
    const result = isPalindrome('racecar'); // Call the function with a palindrome
    expect(result).toBe(true); // The expected result is true
  });

  // The it() function is a test spec that checks a non-palindrome
  it('should return false when the string is not a palindrome', () => {
    const result = isPalindrome('hello'); // Call the function with a non-palindrome
    expect(result).toBe(false); // The expected result is false
  });

  // The it() function is a test spec that checks invalid input
  it('should throw an error when the input is not a string', () => {
    expect(() => isPalindrome(123)).toThrow('Input must be a string');
  });
});