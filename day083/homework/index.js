// Create an object person with properties: name, age, and city. Log the object to the console.

const person = {
    name: "berdia",
    age: 11,
    city: "tbilisi"
}

console.log(person);

// Given the person object, access and log the name and city properties.

console.log(person["name"]);
console.log(person["city"]);

// Destructure the name and age properties from the person object and log them.

const {personName, personAge} = person;

console.log(personName, personAge);