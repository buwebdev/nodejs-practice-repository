const isPalindrome = require('../../src/palindrome');

test('returns true for a standard single-word palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
});

test('returns true for a complex palindrome sentence ignoring case and spaces', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
});

test('returns false for a non-palindrome word', () => {
    expect(isPalindrome('hello')).toBe(false);
});
