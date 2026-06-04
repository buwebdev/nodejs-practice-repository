/**
 * Author: Nicholas Skelton
 * Date: 3 June 2026
 * File: check_if_palindrome.js
 * Description: This script checks to see if a string is a palindrome
 */
'use strict';

function isPalindrome(str) {
    // Convert string to lowercase and remove all non-alphanumeric characters
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Splits string into an array of individual characters, reverses it, and rejoins the string
  const reversed = cleaned.split('').reverse().join('');
    // Compares the cleaned string to the reversed 
  return cleaned === reversed;
}

module.exports = { isPalindrome }; // Export the factorial function for use in other scripts