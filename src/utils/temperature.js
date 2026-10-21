/**
 * Author: Marcellino Modesto
 * Date: 21 October 2026
 * File: temperature.js
 * Description: Converts Fahrenheit temperatures to Celsius.
 */
'use strict';

// Converts a temperature from Fahrenheit to Celsius.
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// Export the function for use in other scripts.
module.exports = { fahrenheitToCelsius };