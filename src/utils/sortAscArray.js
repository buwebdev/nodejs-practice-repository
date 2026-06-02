/**
 * Author: Shannon Kueneke
 * Date: June 2, 2026
 * File: sortAscArray.js
 * Description: This script sorts a given array in ascending order
 */
"use strict";

// The sortAscArray function sorts a given array in ascending order
function sortAscArray(arr) {
  //if the value passed is not an array, throw an error
  if (!Array.isArray(arr)) {
    throw new Error("Passed value is not an array");
  }
  //checks the type of values contained in passed array and adds type to new array
  let typeArray = [];
  arr.forEach((value) => {
    if (!typeArray.includes(typeof value)) {
      typeArray.push(typeof value);
    }
  });

  //if the values are mixed type or strings they must be compared by their string value
  if (typeArray.length > 1) {
    //convert all values to strings to then compare values to sort
    return arr.sort((a, b) => String(a).localeCompare(String(b)));
  }

  //if the values in the array passed are all numbers
  if (typeArray.length === 1 && typeArray[0] === 'number') {
    return arr.sort((a, b) => a - b);
  }
}


module.exports = { sortAscArray }; // Export the sortAscArray function for use in other scripts
