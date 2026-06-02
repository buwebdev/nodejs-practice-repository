/**
 * Author: Professor Krasso
 * Date: 13 September 2024
 * File: index.js
 * Description: This script is the main entry point for the
 *
 */

// Import the factorial function from the factorial.js file
const { factorial } = require('./utils/factorial');

//Import the sortAscArray function from sortAscArray.js file
const { sortAscArray } = require('./utils/sortAscArray');

// The main() function calculates the factorial of 5 and logs the result to the console and sort the array ascendingly and log to console
async function main () {
  const result = factorial(5); // Call the factorial function with the value of 5
  console.log('factorial of 5 is', result); // Log the result to the console


  const myArray = [5, 8, 1, 2]; //array to sort ascendingly
  const sortedArray = sortAscArray(myArray); //sorted array
  console.log('array sorted ascendingly: ', sortedArray); //log to console
}

main(); // Call the main function to calculate the factorial of 5 and sort the array ascendingly