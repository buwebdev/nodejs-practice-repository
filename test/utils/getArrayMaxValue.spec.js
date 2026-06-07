/**
 * Author: Dustin Craven
 * Date: 06 June 2026
 * File: arrayMaxValue.js
 * Description: This script returns the maximum value of an array
 */
'use strict';

const { getArrayMaxValue } = require('../../src/utils/getArrayMaxValue'); // Import the getArrayMaxValue function from the getArrayMaxValue.js file

// The describe() function is a test suite that contains one or more tests
describe('getArrayMaxValue.js', () => {

    // The it() function is a test spec that contains one or more expectations
    it('should find the value of 25 from the input array', () => {
      const result = getArrayMaxValue([0,5,10,15,20,25]); // Call the getArrayMaxValue function on the array [0,5,10,15,20,25]
      expect(result).toBe(25); // The expected result is 25
    });
    
    // The it() function is a test spec that contains one or more expectations
    it('should find that zero is the max value in an array of negative numbers', () => {
      const result = getArrayMaxValue([-25,-20,-15,-10,-5,0]); // Call the getArrayMaxValue function on the array [-25,-20,-15,-10,-5,0]
      expect(result).toBe(0); // The expected result is 0
    });
    
    // The it() function is a test spec that contains one or more expectations
    it('should find the max value of 25 when the array also has non-number values', () => {
      const result = getArrayMaxValue(['zero',5,'ten',15,'twenty',25]); // Call the getArrayMaxValue function on the array ['zero',5,'ten',15,'twenty',25]
      expect(result).toBe(25); // The expected result is 25
    });
    
    // The it() function is a test spec that contains one or more expectations
    it('should throw an error for the input not being an array', () => {
      // Call the getArrayMaxValue function with a non-array value and expect it to throw an error
      expect(() => getArrayMaxValue('I am not an array')).toThrow('Input value is not an array for getArrayMaxValue');
    });
});