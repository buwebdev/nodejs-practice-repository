/**
 * Author: Darwin Pena Cabrera
 * Date: 21 October 2026
 * File: celsius_to_fahrenheit.js
 * Description: This script converts Celsius to Fahrenheit.
 */
'use strict';

// The celsiusToFahrenheit function converts Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

module.exports = { celsiusToFahrenheit }; // Export the celsiusToFahrenheit function for use in other scripts