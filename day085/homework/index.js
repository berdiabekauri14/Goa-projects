// Define a Car class with public properties make and model. Create an instance and access these properties.

class Car {
    constructor(model) {
        this.model = model;
    }

    printInfo() {
        return `This Car is ${this.model}`;
    }
}

const car = new Car("BMW");

console.log(car);

// Define a BankAccount class where balance is a private property. Implement a public method to deposit and withdraw money from the account.

class BankAccount {
    #deposit;
    #withdraw;

    constructor(balance, deposit, withdraw) {
        this.balance = balance;
        this.#deposit = deposit;
        this.#withdraw = withdraw;
    }

    get depositBalance() {
        if (this.balance > this.#deposit) {
            return `${this.balance + this.#deposit}`;
        }

        return `${this.#deposit + this.balance}`;
    }

    get withdrawBalance() {
        if (this.balance < this.#withdraw) {
            return `You have ${this.#withdraw - this.balance}`;
        }

        return `You have ${this.balance - this.#withdraw}`;
    }
}

const account = new BankAccount(0, 10, 50);

console.log(account);

// Create a MathOperations class with a static method add() that adds two numbers. Also, define a static property PI representing the value of Pi.

class MathOperations {
    #pi;

    constructor(num1, num2, pi) {
        this.num1 = num1;
        this.num2 = num2;
        this.#pi = pi;
    }

    get sum() {
        return this.num1 + this.num2 + this.#pi
    }
}

const operation = new MathOperations(1, 1, 3.1415926536);

console.log(operation)

// Define a Book class where the title is public, but the number of pages is private. Implement getters and setters to access and modify the number of pages.

class Book {
    #pages;

    constructor(title, pages) {
        this.title = title;
        this.#pages = pages;
    }

    get bookTitle() {
        return `Book title is ${this.title}`;
    }

    set pageNumbers(num) {
        return `This book has ${pages + num} pages`;
    }
}

const book = new Book("simba", 99);

console.log(book);

// Create a Vehicle class with private properties like speed. Then, create a Bike subclass that can access public methods to modify or retrieve the speed.

class Vehicle {
    #speed;

    constructor(bike, speed) {
        this.bike = bike;
        this.#speed = speed;
    }

    modify() {
        return `This Vehicle is a ${this.bike}, It speed is ${this.#speed}`;
    }
}

const vehicle = new Vehicle("bike", 300);

console.log(vehicle);

// Define a Student class with a static method compareGrades(student1, student2) that compares the grades of two student instances.

class Student {
    constructor(Student1, Student2) {
        this.student1 = Student1;
        this.student2 = Student2;
    }

    studentsTestAnwsers(test1, test2) {
        this.test1 = test1;
        this.test2 = test2;
    }

    compareGrades(testCorrectAnwsers) {
        this.grade1 = 10;
        this.grade2 = 10;


        if (this.test1 !== testCorrectAnwsers) {
            this.grade1 -= 8
        } else if (this.test2 !== testCorrectAnwsers) {
            this.grade2 - 8;
        }

        return this.grade1, this.grade2;
    }
}

const grades = new Student(1, 2);

console.log(grades);