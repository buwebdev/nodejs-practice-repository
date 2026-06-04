/**
 * Author: Professor Krasso
 * Date: 13 September 2024
 * File: index.js
 * Description: This script is the main entry point for the
 */

// Import the factorial function from the factorial.js file
const { factorial } = require('./utils/factorial');

const { convertToCelsius } = require('./utils/fahrenheit_to_celsius_converter');

// The main() function calculates the factorial of 5 & converts the fahrenheit temp of 50 to celsius, and logs both results to the console
async function main () {
  const result = factorial(5); // Call the factorial function with the value of 5
  console.log('factorial of 5 is', result); // Log the result to the console

  const fahrenheitTemp = 50; // Fahrenheit temp to convert to Celsius
  const celsiusTemp = convertToCelsius(fahrenheitTemp); // Convered temperature
  console.log('the Celsius temperature is:', celsiusTemp); // log to console
}

main(); // Call the main function to calculate the factorial of 5 & convert the fahrenheit temp of 50