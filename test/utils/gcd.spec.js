
'use strict';

const { gcd } = require('../../src/utils/gcd');

describe('gcd.js', () => {
  it('should calculate the GCD of 12 and 8', () => {
    expect(gcd(12, 8)).toBe(4);
  });

  it('should calculate the GCD of two relatively prime numbers', () => {
    expect(gcd(7, 5)).toBe(1);
  });

  it('should calculate the GCD when one number is zero', () => {
    expect(gcd(10, 0)).toBe(10);
  });
});
