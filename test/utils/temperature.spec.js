/**
 * Author: Professor Krasso
 * Date: 14 January 2026
 * File: temperature.spec.js
 * Description: This script tests the temperature conversion functions.
 */
'use strict';

const { celsiusToFahrenheit } = require('../../src/utils/temperature'); // Import the temperature conversion function

// The describe() function is a test suite that contains one or more tests
describe('temperature.js', () => {

  // Test for converting 0°C to 32°F
  it('should convert 0°C to 32°F', () => {
    const result = celsiusToFahrenheit(0);
    expect(result).toBe(32);
  });

  // Test for converting 100°C to 212°F
  it('should convert 100°C to 212°F', () => {
    const result = celsiusToFahrenheit(100);
    expect(result).toBe(212);
  });

  // Test for converting -40°C to -40°F
  it('should convert -40°C to -40°F', () => {
    const result = celsiusToFahrenheit(-40);
    expect(result).toBe(-40);
  });
});