/**
 * Author: Professor Krasso
 * Date: 10/22/24
 * File Name: gcd.spec.js
 * Description: Test file for the gcd function.
 */

const gcd = require('../../src/utils/gcd');

// Test cases for the gcd function
describe('gcd', () => {
  test('should calculate the GCD of 48 and 18', () => {
    expect(gcd(48, 18)).toEqual(6);
  });

  test('should calculate the GCD of 101 and 103', () => {
    expect(gcd(101, 103)).toEqual(1);
  });

  test('should calculate the GCD of 0 and 5', () => {
    expect(gcd(0, 5)).toEqual(5);
  });
});