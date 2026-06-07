/**
 * Author: Jarren Bess
 * Date: 2 June 2026
 * File: reverseString.spec.js
 * Description: Tests for the reverseString utility function.
 */
"use strict";

const { reverseString } = require("../../src/utils/reverseString");

describe("reverseString", () => {
  it("should reverse a regular string", () => {
    const result = reverseString("hello");
    expect(result).toBe("olleh");
  });

  it("should return an empty string when given an empty string", () => {
    const result = reverseString("");
    expect(result).toBe("");
  });

  it("should throw an error when given a non-string input", () => {
    expect(() => reverseString(123)).toThrow("Input must be a string");
  });
});
