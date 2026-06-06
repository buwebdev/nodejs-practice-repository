//Name: Amit Jaggernauth
//Professor: Richard Krasso
//Course: WEB-450
//Date: 6/9/2024

// lcm.js

/**
 * Calculate the Greatest Common Divisor (GCD)
 * using the Euclidean algorithm.
 */
function gcd(a, b) {
  if (a === 0) return b;
  return gcd(b % a, a);
}

/**
 * Calculate the Least Common Multiple (LCM)
 * of two positive integers.
 */
function lcm(a, b) {
  if (a <= 0 || b <= 0) {
    throw new Error("Inputs must be positive integers");
  }

  return Math.abs(a * b) / gcd(a, b);
}

module.exports = { lcm, gcd };
