/**
 * Author: Kaitlyn Kelly
 * Date: 6/3/2026
 * File: fahrenheit_to_celsius_converter.js
 * Description: This script converts a fahrenheit temp to a celsius temp
 */
'use strict';

// function to convert a fahrenheit temp to equal temp in celsius
function convertToCelsius(n) {

    // if n is not a number, throw error and return
    if (typeof n !== 'number' || Number.isNaN(n)) {
        throw new Error('Input must be a valid number');
    }

    // formula to convert n to a celsius temp & store in celsiusTemp variable
    const celsiusTemp = (n - 32) * (5/9);

    // round converted celsius temp to two decimal places & return value
    return Math.round(celsiusTemp * 100) / 100;
}

// Export the function for use in other scripts
module.exports = { convertToCelsius }; 