// Task 5: First, run npm init in your project directory to generate a package.json file. Make sure to add "type": "module" at the top level of your package.json so that Node.js recognizes ES module syntax. Create a file called mathOperations.js. Export a default function add(a, b) that returns the sum of a and b. Also, create a named export subtract(a, b) that returns the difference between a and b. Then, create a calculator.js file and import both the default export and the named export from mathOperations.js. Use these functions to perform addition and subtraction, and log the results.

import add from "./mathOperation.js";
import subtract from "./mathOperation.js";

console.log(add(1, 1));
console.log(subtract(2, 1));