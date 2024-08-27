// შექმენით ობიექტის კონსტრუქტორი რომელსაც გადაეცემა 4 მნიშვნელობა (თქვენი სურვილით აარჩიეთ თუ რა ტიპის ობიექტს შექმნის კონსტრუქტორი)

function func(name, lastName, age, hobby) {
    this.name = name;
    this.surname = lastName;
    this.age = age;
    this.hobby = hobby;
}

const constructor = new func("Berdia", "Bekauri", 11, ["Programming", "Playing Football", "Making Designs", "Making Edits"]);

console.log(constructor)