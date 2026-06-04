/**
 * Author: Kaitlyn Kelly
 * Date: 6/3/2026
 * File: fahrenheit_to_celsius_converter.spec.js
 * Description: This script tests the convertToCelsius function
 */
'use strict';

// import the convertToCelsius functon from its file
const { convertToCelsius } = require ('../../src/utils/fahrenheit_to_celsius_converter');

describe('fahrenheit_to_celsius_converter.js', () => {

    // test that the function correctly converts a temperature to celsius
    it('should convert a fahrenheit temperature to its celsius equivalent', () => {
        const result = convertToCelsius(100);
        expect(result).toBe(37.78);
    });

    // test that the function converts a negative number
    it('should convert a negative temperature to its celsius equivalent', () => {
        const result = convertToCelsius(-5);
        expect(result).toBe(-20.56);
    });
    
    // test that the function throws an error when a non-number is supplied
    it('should throw an error when a non-number is supplied as the input', () => {
        expect(() => convertToCelsius("ten")).toThrow('Input must be a valid number');
    });
});