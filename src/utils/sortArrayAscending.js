/**
 * Author: Dagmawi Megra
 * Date: 21 October 2025
 * File: sortArrayAscending.js
 * Description: This script sorts an array in ascending order
 */
'use strict';

function sortArrayAscending(arr) {
  // Check if the input is a valid array
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array');
  }
  // Sort the array in ascending order
  return arr.sort((a, b) => a - b);
}

// Export the sortArrayAscending function 
module.exports = { sortArrayAscending };