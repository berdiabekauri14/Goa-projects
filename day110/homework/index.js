// 1) შექმნით ცხოველის, მაქანის და ადამიანის კლასი, თითოეული სამი property-თ და ერთი მეთოდით. თითოეული კლასიდან შექმენით სამ-სამი -ობიექტი და გამოიტანეთ ისინი კონსოლში.

class Animal {
    constructor(type, name, age) {
        this.arr = [];
        this.type = type;
        this.sound = sound;
        this.name = name;
        this.age = age;
    }

    static printInfo() {
        this.arr.append({
            type: this.type,
            sound: this.sound,
            name: this.name,
            age: this.age
        })
        console.log(this.arr);
    }
}

class Person {
    constructor(gender, name, age) {
        this.arr = [];
        this.gender = gender;
        this.name = name;
        this.age = age;
    }

    static printInfo() {
        this.arr.append({
            gender: this.gender,
            name: this.name,
            age: this.age
        })
        console.log(this.arr);
    }
}

const animal = Animal.printInfo("cat", "mia", 4);

const person = Person.printInfo("male", "berdia", 11)

console.log(animal);
console.log(person);