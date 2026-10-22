/**
 * Author: Darwin Pena Cabrera
 * Date: 21 October 2026
 * File: celsius_to_fahrenheit.spec.js
 * Description: This script tests the Celsius to Fahrenheit conversion function.
 */
'use strict';

// Import the celsiusToFahrenheit function from the celsius_to_fahrenheit.js file
const { celsiusToFahrenheit } = require('../../src/utils/celsius_to_fahrenheit');

// The describe() function is a test suite that contains one or more tests
describe('celsius_to_fahrenheit.js', () => {
  // Test the conversion of 25 degrees Celsius to Fahrenheit
  it('should convert 25 degrees Celsius to 77 degrees Fahrenheit', () => {
    const result = celsiusToFahrenheit(25);
    expect(result).toBe(77);
  });

  // Test the conversion of 0 degrees Celsius to Fahrenheit
  it('should convert 0 degrees Celsius to 32 degrees Fahrenheit', () => {
    const result = celsiusToFahrenheit(0);
    expect(result).toBe(32);
  });

  // Test the conversion of -40 degrees Celsius to Fahrenheit
  it('should convert -40 degrees Celsius to -40 degrees Fahrenheit', () => {
    const result = celsiusToFahrenheit(-40);
    expect(result).toBe(-40);
  });
});