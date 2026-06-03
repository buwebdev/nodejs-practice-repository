/**
 * Author: Amanda Ruff
 * Date: 2 June 2026
 * File: palindrome.js
 * Description: This script checks if a string is a palindrome.
 */
'use strict';

// The isPalindrome function checks whether a string reads the same forward and backward
function isPalindrome(str) {

  // If the input is not a string, throw an error
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }

  // Remove spaces, convert to lowercase, and remove non-alphanumeric characters
  const cleanedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the cleaned string
  const reversedString = cleanedString.split('').reverse().join('');

  // Return true if the cleaned string matches the reversed string
  return cleanedString === reversedString;
}

module.exports = { isPalindrome }; // Export the isPalindrome function for use in other scripts