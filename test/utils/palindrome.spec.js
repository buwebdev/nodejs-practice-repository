/**
 * Author: Niki Nielsen
 * Date: 06/03/2026
 * File: palindrome.spec.js
 * Description: Tests for the isPalindrome function.
 */
"use strict";

const isPalindrome = require("../../src/utils/palindrome");

describe("palindrome.js", () => {
  it("should return true for a simple palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("should return false for a non-palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  it("should handle punctuation and mixed case", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });
});
