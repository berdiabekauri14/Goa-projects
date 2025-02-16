// შექმენი კლასი `User`, რომელსაც ექნება თვისებები `name` და `email`. კონსტრუქტორის მეშვეობით ინიციალიზაცია გაუკეთე ამ თვისებებს და შექმენი რამდენიმე `User` ობიექტი.

// დაამატე `User` კლასს მეთოდი `displayInfo()`, რომელიც კონსოლში დაბეჭდავს მომხმარებლის სახელს და ელფოსტას. შექმენი რამდენიმე `User` ობიექტი და გამოძახე ეს მეთოდი თითოეულზე.

// დაამატე `User` კლასს სტატიკური მეთოდი `compareUsers(user1, user2)`, რომელიც შეადარებს ორ მომხმარებელს მათი `email`-ის მიხედვით. სცადე ამ მეთოდის გამოძახება ორ `User` ობიექტზე.

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    displayInfo() {
        return `
            Name: ${this.name}
            Email: ${this.email}
        `;
    }

    compareUsers(user1, user2) {
        return `
            user1: ${user1}
            user2: ${user2}
        `;
    }
}

const user = new User("Berdia", "email@gmail.com");

user.array.forEach(() => {
    console.log(user);
});

// შექმენი კლასი `Product`, რომელსაც ექნება `name` და `price` თვისებები. გამოიყენე `get` და `set` accessors `price`-ისათვის, რათა დარწმუნდე, რომ ფასი მხოლოდ დადებითი მნიშვნელობაა.

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    get productPrice() {
        return `${this.name} costs ${this.price}`;
    }

    set productPrice(number) {
        if (this.price < number) {
            return "Incorrect, price must be positive";
        }
    }
}

const product = new Product("cheese", 1);

console.log(product);

// შექმენი მშობელი კლასი `Person` და შვილკლასი `Student`. `Person`-ს ექნება `name` და `age`, ხოლო `Student` დაამატებს `studentID` თვისებას. მემკვიდრეობისას გამოიძახე მშობელი კლასის კონსტრუქტორი `super()`-ით.

// იმავე `Person` და `Student` კლასებში, შექმენი მეთოდი `getDetails()`, რომელიც `Person` კლასში დაბეჭდავს მხოლოდ სახელს და ასაკს, ხოლო `Student`-ში ასევე სტუდენტის ID-ს. 


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `
            Name: ${this.name}
            Age: ${this.age}
        `;
    }
}

class Student extends Person {
    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
    }

    getDetails() {
        return `
            Name: ${this.name}
            Age: ${this.age}
            Student ID: ${this.studentID}
        `;
    }
}

const person = new Person("berdia", 11);

console.log(person);

// შექმენი კლასი `BankAccount`, რომელსაც ექნება დაცული (private) თვისება `_balance`. დაამატე მეთოდი `deposit(amount)` ბალანსის დასამატებლად და `withdraw(amount)` ფულის ამოსაღებად. 

class BankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        return `Your balance is now ${amount + this.#balance}`;
    }

    withdraw(amount) {
        return `Your balance is now ${amount - this.#balance}`;
    }
}

const bankAccount = new BankAccount(210);

console.log(bankAccount);

// შექმენი კლასი `Appliance`, რომელიც დაცულ (protected) თვისებად შეინახავს `power`-ს. მემკვიდრეობით მიიღე `WashingMachine` კლასი, რომელიც `Appliance`-ის თვისებებს გამოიყენებს, და დაამატე დამატებითი თვისებები და მეთოდები.

class Appliance {
    constructor(power) {
        this.power = power;
    }

    turnOn() {
        return "Power on";
    }
}

class WashingMachine extends Appliance {
    constructor(power) {
        super(power);
    }

    washClothes() {
        return "Clothes has been washed";
    }
}

const appliance = new Appliance("off");

console.log(appliance);

// შექმენი კლასი `Counter`, რომელსაც ექნება სტატიკური თვისება `count` და სტატიკური მეთოდი `increment()`, რომელიც `count`-ს 1-ით გაზრდის.

class Counter {
    constructor(count) {
        this.count = count;
    }

    increcement() {
        return this.count + 1;
    }
}

const counter = new Counter(1);

console.log(counter);

// შექმენი კლასი `Book` და შექმენი ამ კლასის რამდენიმე ობიექტი მასივში. შემდეგ გამოიყენე `forEach()` რათა ყველა წიგნის სათაური დაბეჭდო.

class Book {
    constructor(books) {
        this.books = books;
    }

    getBookTitle() {
        this.books.forEach((title) => {
            return `Book title: ${title}`;
        })
    }
}

const book = new Book([]);

console.log(book);