/**
 * Author: Nicholas Skelton
 * Date: 3 June 2026
 * File: check_if_palindrome.spec.js
 * Description: This script tests the isPalindrome function.
 */
'use strict';

const { isPalindrome } = require('../../src/utils/check_if_palindrome'); // Import the isPalindrome function from the palindrome.js file

// The describe() function is a test suite that contains one or more tests
describe('palindrome.js', () => {

  // The it() function is a test spec that contains one or more expectations
  it('should return true for a valid palindrome', () => {
    const result = isPalindrome('racecar'); // Call the isPalindrome function with the value of racecar
    expect(result).toBe(true); // The expected result is true
  });

  // The it() function is a test spec that contains one or more expectations
  it('should return false for a non-palindrome string', () => {
    const result = isPalindrome('hello'); // Call the isPalindrome function with the value of hello
    expect(result).toBe(false); // The expected result is false
  });

  // The it() function is a test spec that contains one or more expectations
  it('should ignore spaces, punctuation, and capitalization', () => {
    const result = isPalindrome('A man, a plan, a canal: Panama'); // Call the isPalindrome function with a formatted palindrome
    expect(result).toBe(true); // The expected result is true
  });

});