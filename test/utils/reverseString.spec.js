/**
 * Author: Professor Krasso
 * Date: 3 June 2026
 * File: reverseString.spec.js
 * Description: This script tests the reverseString function.
 */
'use strict';

const { reverseString } = require('../../src/utils/reverseString');

describe('reverseString.js', () => {

  it('should reverse a normal string', () => {
    const result = reverseString('hello');
    expect(result).toBe('olleh');
  });

  it('should return an empty string when given an empty string', () => {
    const result = reverseString('');
    expect(result).toBe('');
  });

  it('should reverse a string with spaces and mixed capitalization', () => {
    const result = reverseString('Hello World');
    expect(result).toBe('dlroW olleH');
  });
});
