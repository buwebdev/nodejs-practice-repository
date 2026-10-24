/**
 * Author: Jonathan Cantu
 * Date: October 24, 2026
 * File: palindrome.js
 * Description: This script determines if a string is a palindrome.
 */
'use strict';

/**
 * Returns true when a string reads the same forward and backward.
 */
function isPalindrome(value) {

  // Throw an error if the input is not a string.
  if (typeof value !== 'string') {
    throw new TypeError('Input must be a string');
  }

  // Reverse the string and compare it with the original.
  const reversed = value.split('').reverse().join('');

  return value === reversed;
}

module.exports = { isPalindrome };
