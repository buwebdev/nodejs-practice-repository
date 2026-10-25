const celsiusToFahrenheit = require('../../src/celsiusToFahrenheit');

describe('Celsius to Fahrenheit conversion', () => {
  test('converts freezing point correctly', () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
  });

  test('converts boiling point correctly', () => {
    expect(celsiusToFahrenheit(100)).toBe(212);
  });

  test('converts negative temperatures correctly', () => {
    expect(celsiusToFahrenheit(-40)).toBe(-40);
  });
});
