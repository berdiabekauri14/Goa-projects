// Task 4: First, run npm init in your project directory to generate a package.json file. Make sure to add "type": "module" at the top level of your package.json so that Node.js recognizes ES module syntax. Create a file called animals.js. In this file, define a default export object with properties species: "Tiger" and sound: "Growl". Create another file called zoo.js and import the default export from animals.js. Use console.log to display the animal's species and sound.

import Tiger from "./animals.js";

console.log(Tiger());