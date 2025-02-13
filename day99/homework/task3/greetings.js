// Task 3: First, run npm init in your project directory to generate a package.json file. Make sure to add "type": "module" at the top level of your package.json so that Node.js recognizes ES module syntax. Create a file called greetings.js. In this file, export two named functions: sayHello that returns "Hello, World!" and sayGoodbye that returns "Goodbye, everyone!". Then, create a main.js file. In main.js, import both sayHello and sayGoodbye from greetings.js and log their return values to the console.

const sayHello = () => {
    return "Hello, World!";
}

const sayGoodbye = () => {
    return "Goodbye, everyone!";
}

export default {sayHello, sayGoodbye};