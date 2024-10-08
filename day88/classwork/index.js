// Map

// შექმენი Map, სადაც თითოეულ სტრიქონს (string) დააკავშირებ მის სიგრძეს (length). დაამატე რამდენიმე სტრიქონი და შეაჯამე ყველა უნიკალური სიგრძის მნიშვნელობა.

const map = new Map(["hello", "react", "node"]);

console.log(map.size("hello"));
console.log(map.size("react"));
console.log(map.size("node"));

// შექმენი რამდენიმე ობიექტი, რომლებიც შეიცავენ id და name ველებს. გამოიყენე Map id-ის მიხედვით თითოეული ობიექტის ჩასაწერად.

const idName = new Map([
    ["123123", "John doe"],
    ["412380123", "berdia bekauri"],
    ["124808210312", "node"]
]);

idName.forEach(() => {
    return `${idName[0]}: ${idName[1]}`;
})

console.log(idName);

// შექმენი Map სადაც სახელები დააკავშირებ ასაკებს. დაწერე ფუნქცია, რომელიც იღებს სახელს და ამოწმებს, არის თუ არა ის Map-ში.

const namesAges = new Map({
    Berdia: 11,
    JohnDoe: 50
})

const checkName = (name) => {
    return namesAges.has(name);
}

console.log(checkName("Berdia"));
console.log(checkName("asd"));

// შექმენი Map, რომელიც შეიცავს რიცხვებით key-value წყვილებს. დაწერე ფუნქცია, რომელიც მხოლოდ იმ წყვილებს დააბრუნებს, რომელთა მნიშვნელობები ლუწია.

const OddEven = new Map();

OddEven.set("one", "two");
OddEven.set("three", "four");
OddEven.set("five", "six");
OddEven.set("seven", "eight");
OddEven.set("nine", "ten");

const evenOrOdd = () => {
    if (OddEven % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(evenOrOdd());

// Set

// Write a function that takes an array of numbers and returns all unique numbers as a Set.

const set = new Set([1, 1, 2, 5, 4, 2, 3, 5, 9]);

console.log(set);

// Create a Set containing several color names (strings). Use a loop to print each element to the console.

const colors = new Set(["red", "green", "blue"]);

colors.forEach(() => {
    return colors;
})

console.log(colors);

// Create two Sets with different elements. Write a function that finds and returns elements that exist in both Sets.

const set1 = new Set("Hello");
const set2 = new Set("World");

const sets = () => {
    return `${set1} ${set2}`;
}

console.log(sets());

// Create three Sets with various numbers. Write a function that combines all three Sets into one, removes duplicates, and returns a Set of unique elements.

const Set1 = new Set([1, 2, 3, 4, 5]);
const Set2 = new Set([6, 7, 8, 9, 10]);
const Set3 = new Set([11, 12, 13, 14, 15, 11]);

const combineSets = () => {
    return `${Set1} ${Set2} ${Set3}`;
}

console.log(combineSets());