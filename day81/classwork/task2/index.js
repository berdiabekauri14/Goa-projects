// 1) write an arrow function that takes a number as an input and cubes it

const cubeNumber = (number) => {
    return number * number
}

console.log(cubeNumber(10));

// 2) create an arrow function that takes to numbers and return ther sum

const sumNumbers = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
}

console.log(sumNumbers(1, 1));

// 3) write an arrow function that returns a string "learning javascript!"

const returnString = () => {
    return "learning javascript!";
}

console.log(returnString())

// 4) write an arrow function that tells you if number is even or odd

const evenOrOdd = (number) => {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "odd";
    }
}

console.log(evenOrOdd(8));

// 5) create an arrow function that multiplies two numbers if the first number is not provided it should be default 1

const multiply = (firstNum, secondNum) => {
    return firstNum * secondNum;
}

console.log(multiply(10, 10));

// 6) write an arrow function wich will have two parameters name and age and with this parameters return an object

const arrowFunc = (name, age) => {
    const object = {
        name: name,
        age: age
    }

    return object
}

console.log(arrowFunc("berdia", 11))

// 7) write an arrow function wich will tell you if the number is positive or negative

const positiveOrNegative = (number) => {
    if (number > 0) {
        return "positive";
    } else {
        return "negative"
    }
}

console.log(positiveOrNegative(5));

// 8) write an arrow function that takes a number and returns it factorial

const factorial = (number) => {
    result = 1;
    for (let i = 0; i < number; i++){
        result *= i;
    }
}

console.log(factorial(5));

// 9) write an function that takes two numbers, and within that function, write another arrow function that returns the product of the numbers

const nestedFunction = (firstNumber, secondNumber) => {
    const arrowFunc = () => {
        return firstNumber, secondNumber
    }
}

console.log(nestedFunction(1, 1));

// 10) created an arrow function that takes an array and sum the array using for loop

const sumLoop = (numbers) => {
    sum = 1;
    for (sum of numbers) {
        numbers += sum;
    }
}

console.log(sumLoop([1, 2, 3, 4, 5]));