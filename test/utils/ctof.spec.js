/**
 * Developer: Meher Salim
 * Date: 10.22.2024
 * File: ctof.js
 * Description: This script tests for :
 *              1: conversion of 0 celsius to fahrenheit
 *              2. conversion of 100 celsius to fahrenheit
 *              3. conversion of -40 celsius to fahrenheit
*/

// Import the celsiusToFahrenheit function from the ctof.js file using the correct relative path
const celsiusToFahrenheit = require('../../src/utils/ctof');  // Correct relative path to your function

// Start of the test suite for celsiusToFahrenheit
describe('celsiusToFahrenheit', function() {

  // Test case 1: Check if the function correctly converts 0°C to 32°F
  it('should correctly convert 0 Celsius to 32 Fahrenheit', function() {
    const result = celsiusToFahrenheit(0);  // Call the function with 0°C
    expect(result).toBe(32);  // Expect the result to be 32°F
  });

  // Test case 2: Check if the function correctly converts 100°C to 212°F
  it('should correctly convert 100 Celsius to 212 Fahrenheit', function() {
    const result = celsiusToFahrenheit(100);  // Call the function with 100°C
    expect(result).toBe(212);  // Expect the result to be 212°F
  });

  // Test case 3: Check if the function correctly converts -40°C to -40°F (a special case where Celsius and Fahrenheit are the same)
  it('should correctly convert -40 Celsius to -40 Fahrenheit', function() {
    const result = celsiusToFahrenheit(-40);  // Call the function with -40°C
    expect(result).toBe(-40);  // Expect the result to be -40°F
  });

});