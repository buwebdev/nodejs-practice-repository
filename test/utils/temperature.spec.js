/**
 * Author: Marcellino Modesto
 * Date: 21 October 2026
 * File: temperature.spec.js
 * Description: Tests the Fahrenheit-to-Celsius conversion function.
 */
'use strict';

const {
  fahrenheitToCelsius
} = require('../../src/utils/temperature');

describe('temperature.js', () => {

  it('should convert the freezing point of water to Celsius', () => {
    const result = fahrenheitToCelsius(32);
    expect(result).toBe(0);
  });

  it('should convert the boiling point of water to Celsius', () => {
    const result = fahrenheitToCelsius(212);
    expect(result).toBe(100);
  });

  it('should convert room temperature to Celsius', () => {
    const result = fahrenheitToCelsius(68);
    expect(result).toBe(20);
  });

});
