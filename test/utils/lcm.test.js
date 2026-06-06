//Name: Amit Jaggernauth
//Professor: Richard Krasso
//Course: WEB-450
//Date: 6/9/2024

// lcm.test.js

const { lcm } = require("./lcm");

describe("LCM Function", () => {
  test("calculates LCM of two small numbers", () => {
    expect(lcm(4, 6)).toBe(12);
  });

  test("calculates LCM when one number is a multiple of the other", () => {
    expect(lcm(5, 20)).toBe(20);
  });

  test("throws an error for non-positive integers", () => {
    expect(() => lcm(-3, 6)).toThrow("Inputs must be positive integers");
  });
});
