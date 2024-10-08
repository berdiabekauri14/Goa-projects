// შექმენი ძირითადი კლასი Animal, რომელსაც ექნება name და age თვისებები და მეთოდი speak(), რომელიც გამოაქვეყნებს ტექსტს: "This animal makes a sound." შემდეგ შექმენი ორი შვილკლასი Dog და Cat, რომლებიც მემკვიდრეობით მიიღებენ Animal-ს და გააფართოვებენ speak() მეთოდს ისე, რომ Dog კლასი გამოაქვეყნებს "Bark!" და Cat - "Meow!".

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        return "This animal makes a sound";
    }
}

class Dog extends Animal {
    constructor(name, age, sound) {
        super(name, age);
        this.sound = sound;
    }

    speak() {
        return `${this.sound}!`;
    }
}

class Cat extends Animal {
    constructor(name, age, sound) {
        super(name, age);
        this.sound = sound;
    }

    speak() {
        return `${this.sound}!`;
    }
}

const animal = new Animal("dog", 1);

console.log(animal);

// შექმენი კლასი Vehicle, რომელსაც ექნება თვისებები make, model, და მეთოდი displayInfo(), რომელიც კონსოლში დაბეჭდავს მანქანის ინფორმაციას. შემდეგ შექმენი შვილი კლასი Car, რომელიც მემკვიდრეობით მიიღებს Vehicle-ს და დაამატებს თვისებას fuelType. გააფართოვე displayInfo() მეთოდი ისე, რომ ის გამოძახებულ იქნას მშობელი კლასიდან და შემდეგ დაემატოს ახალი ინფორმაცია fuelType-ზე.

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    displayInfo() {
        return `The model of the vehicle is ${this.model}, And the make of the vehicle is ${this.make}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, fuelType) {
        super(make, model);
        this.fuelType = fuelType;
    }

    displayInfo() {
        return `The model of the vehicle is ${this.model}, And the make of the vehicle is ${this.make}, And the fuelType is ${this.fuelType}`;
    }
}

const vehicle = new Vehicle("maker", "BMW");

console.log(vehicle);

// შექმენი კლასი Shape, რომელსაც ექნება კონსტრუქტორი, რომელიც იღებს ორ პარამეტრს: name და sides. შემდეგ შექმენი შვილი კლასი Triangle, რომელიც მემკვიდრეობით მიიღებს Shape-ს, დაამატებს ახალ თვისებას base და height და შექმნის მეთოდს calculateArea(), რომელიც გამოთვლის სამკუთხედის ფართობს.

class Shape {
    constructor(name, sides) {
        this.name = name;
        this.sides = sides;
    }
}

class Triangle {
    constructor(name, sides, base, height) {
        super(name, sides);
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        return `The fartobi of the triangle is ${1 / 2 - this.base * this.height}`;
    }
}

const triangle = new Triangle("triangle", 3, 50, 50);

console.log(triangle);

// შექმენი ძირითადი კლასი Appliance, რომელსაც ექნება თვისებები brand და power, და მეთოდი turnOn(), რომელიც კონსოლში დაბეჭდავს "The appliance is now on." შემდეგ შექმენი ორი შვილი კლასი WashingMachine და Microwave. WashingMachine დაამატებს მეთოდს washClothes(), ხოლო Microwave დაამატებს მეთოდს heatFood(). თითოეულ შვილკლასში შეამოწმე მშობლის turnOn() მეთოდის მუშაობა.

class Appliance {
    constructor(brand, power) {
        this.brand = brand;
        this.power = power;
    }

    turnOn() {
        return "The appliance is now on";
    }
}

class WashingMachine extends Appliance {
    constructor(brand, power){
        super(brand, power);
    }

    washClothes() {
        return "clothes washed";
    }
}

class Microwave extends Appliance {
    constructor(brand, power) {
        super(brand, power);
    }

    heatFood() {
        return "Food is ready";
    }
}

const appliance = new Appliance("new", "off");

console.log(appliance);