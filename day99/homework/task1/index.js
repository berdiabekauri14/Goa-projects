// Task 1: Create a file called mathUtils.js. In this file, define two functions: add(a, b) that returns the sum of a and b, and subtract(a, b) that returns the difference between a and b. Export both functions using module.exports. Then, create a main.js file and import the add and subtract functions using require. Use these functions to perform some calculations and log the results to the console.

const add = require("./mathUtils");
const subtract = require("./mathUtils");

console.log(add(1, 1));
console.log(subtract(2, 1));