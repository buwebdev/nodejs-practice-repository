/**
 * Author: Professor Krasso
 * Date: 13 September 2024
 * File: index.js
 * Description: This script is the main entry point for the
 */

// Import the factorial function from the factorial.js file
const { factorial } = require('./utils/factorial');

// Import the temperature conversion function
const { celsiusToFahrenheit } = require('./utils/temperature');

// The main() function calculates the factorial of 5 and logs the result to the console
async function main () {
  const result = factorial(5); // Call the factorial function with the value of 5
  console.log('factorial of 5 is', result); // Log the result to the console

  const fahrenheit = celsiusToFahrenheit(25); // Convert 25°C to Fahrenheit
  console.log('25°C is', fahrenheit, '°F'); // Log the result
}

main(); // Call the main function to calculate the factorial of 5