/**
 * Author: Aisha Keller
 * Date: 2 June 2026
 * File: gcd.spec.js
 * Description: This script tests the gcd function.
 */

'use strict';

const { gcd } = require('../../src/utils/gcd'); // Import the gcd function from the gcd.js file

// The describe() function is a test suite that contains one or more tests
describe('gcd.js', () => {

// Test 1: The it() should calculate the GCD of 12 and 8
it('should calculate the GCD of 12 and 8', () => {
    const result = gcd(12, 8); // Call the gcd function with the values of 12 and 8;
    expect(result).toBe(4); // The expected result is 4
});

// Test 2: The it() should calculate the GCD of 100 and 25
it('should calculate the GCD of 100 and 25', () => {
    const result = gcd(100, 25); // Call the gcd function with the values of 100 and 25
    expect(result).toBe(25); // The expected result is 25
});

// Test 3: The it() should throw an error when calculating the GCD of a negative number
it('should throw an error when calculating the GCD of a negative number', () => {
    // Call the gcd function with the values of -12 and 8 and expect it to throw an error
    expect(() => gcd(-1, 5)).toThrow('GCD of negative numbers is not defined');
});
});