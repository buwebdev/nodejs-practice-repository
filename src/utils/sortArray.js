/**
 * Author: Mariea Nies
 * Date: January 13 2026
 * File: sortArray.js
 * Description: This function sorts an array of numbers in ascending order
 */
'use strict';

function sortArrayAscending(arr) {
    // Validate input
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }

    // Return a NEW sorted array (do not mutate original)
    return [...arr].sort((a, b) => a - b);
}

module.exports = { sortArrayAscending };