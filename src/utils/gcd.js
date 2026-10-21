
/**
 * Calculates the greatest common divisor.
 */
'use strict';

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}

module.exports = { gcd };
