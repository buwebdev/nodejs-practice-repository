/**
 * Author: Chris Newell
 * Date: 18 January 2026
 * File: palindrome.spec.js
 * Description: This script tests the isPalindrome function.
 */
'use strict';

const { isPalindrome } = require('../../src/utils/palindrome');

describe('palindrome.js', () => {
  it('should return true for a simple palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  it('should ignore case and non-alphanumeric characters', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it('should return false when the string is not a palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });
});