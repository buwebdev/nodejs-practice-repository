/**
 * Author: Dustin Craven
 * Date: 06 June 2026
 * File: arrayMaxValue.js
 * Description: This script returns the maximum value of an array
 */
'use strict';

// The getArrayMaxValue finds the max value of an array and returns that value
function getArrayMaxValue(arr) {

    // If the input is not an array, return an error
    if (!arr.isArray()) {
        throw new Error('Input value is not an array for getArrayMaxValue');
    }

    // Get the max value of the array while using a filter to remove all non-numbers and keeping zeros
    const maxValue = Math.max(...arr.filter((n) => typeof n === 'number' && Number.isFinite(n)));

    return maxValue;
}

module.exports = { getArrayMaxValue }; // Export the getArrayMaxValue function for use in other scripts