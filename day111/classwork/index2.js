//2)  შექმენით ცხოველის კლასი,  შემდეგ მისი შთამომავალი ძუძუმწოვრის კლასი და ძუძუმწოვრის შთამომაცალი ძაღლის კლასი. თითოეული კლასის კონტრუკტორი უნდა იყოს მის მშობელ კლასზე დაფუძენბული.

class Animal {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }

    printInfo() {
        console.log(`type: ${this.type}`);
        console.log(`name: ${this.name}`);
    }
}

class Mammal extends Animal {
    constructor(type, name, age) {
        super(type, name);
        this.age = age;
    }

    printInfo() {
        console.log(`age: ${this.age}`);
    }
}

class Dog extends Mammal {
    constructor(type, name, age, width, height) {
        super(type, name, age);
        this.width = width;
        this.height = height;
    }

    printInfo() {
        console.log(`width: ${this.width}`);
        console.log(`height: ${this.height}`);
    }
}

const animal = new Animal("dog", "gogo", 8, 40, 60);
animal.printInfo();