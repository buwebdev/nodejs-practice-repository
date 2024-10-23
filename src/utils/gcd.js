/**
 * Author: Professor Krasso
 * Date: 10/22/24
 * File Name: gcd.js
 * Description: GCD function to calculate the greatest common divisor of two numbers.
 */

function gcd(a, b) {
  // while b is not 0
  while(b) {
    // swap a and b and calculate the remainder of a divided by b and assign it to b
    [a, b] = [b, a % b];
  }
  return a; // return a
}

module.exports = gcd;