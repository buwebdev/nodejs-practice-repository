const { isPalindrome } = require("../src/palindrome");

describe("isPalindrome", () => {
  test("returns true for a simple palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test("returns true for a palindrome with spaces and capitalization", () => {
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
  });

  test("returns false for a non-palindrome string", () => {
    expect(isPalindrome("hello world")).toBe(false);
  });
});
