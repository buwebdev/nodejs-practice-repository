/**
 * Author: Professor Krasso
 * Date: 3 June 2026
 * File: reverseString.js
 * Description: This script reverses a string
 */
'use strict';

function reverseString(str) {
  return str.split('').reverse().join('');
}

module.exports = { reverseString };
