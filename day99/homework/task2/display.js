// Task 2: Create a file called message.js. In this file, create an object greeting with properties text: "Hello" and language: "English". Export this object as the default export using module.exports. Then, in a display.js file, import the default export using require and log the greeting text and language to the console.

const greeting = require("./message");

console.log(greeting("Georgia"));