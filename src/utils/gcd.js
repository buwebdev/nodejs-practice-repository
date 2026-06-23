/**
 * Author: Aisha Keller
 * Date: 2 June 2026
 * File: gcd.js
 * Description: This script calculates the greatest common divisor of two numbers
 */

'use strict';

// The gcd function calculates the greates common divisor of two numbers
function gcd(a, b) {

// If either number is negative, throw an error
if (a < 0 || b < 0) {
  throw new Error('GCD of negative numbers is not defined');
}

// Use the Euclidean alorithm to calculate the GCD
while (b !== 0) {
  let temp = b;
  b = a % b;
  a = temp;
}

return a; // Return the GCD
}

module.exports = { gcd }; // Export the gcd function for use in other scripts