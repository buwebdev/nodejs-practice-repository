
/**
 * Author: Jonathan Cantu
 * Date: October 24, 2027
 * File: palindrome.spec.js
 * Description: This script tests the factorial function.
 */
'use strict';

const { isPalindrome } = require('../../src/utils/palindrome');

describe('palindrome.js', () => {

  it('should return true for a valid palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  it('should return false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  it('should return true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

});
