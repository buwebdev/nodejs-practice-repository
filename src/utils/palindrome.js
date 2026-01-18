/**
 * Author: Chris Newell
 * Date: 18 January 2026
 * File: palindrome.js
 * Description: This script checks whether a string is a palindrome
 */
'use strict';

// The isPalindrome function checks if a string reads the same forward and backward
function isPalindrome(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }

  // Normalize: lowercase and remove non-alphanumeric characters
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = normalized.split('').reverse().join('');

  return normalized === reversed;
}

module.exports = { isPalindrome };