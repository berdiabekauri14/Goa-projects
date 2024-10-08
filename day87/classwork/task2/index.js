// შექმენი ცარიელი Map და დაამატე მასში რამდენიმე პროდუქტი და მათი ფასები set() მეთოდის გამოყენებით. შემდეგ თითოეული პროდუქტის დამატებისას კონსოლში დაბეჭდე შეტყობინება, რომ პროდუქტი წარმატებით დაემატა.

const map = new Map()

map.forEach(() => {
    console.log("New product added");
})

map.set("cheese", 1);
map.set("egg", 3);
map.set("potato", 10);

console.log(map);

// უკვე შექმნილი Map-დან, გამოიყენე get() მეთოდი, რათა გარკვეული პროდუქტის ფასი მიიღო და დაბეჭდო კონსოლში.

console.log(map.get("cheese"));
console.log(map.get("egg"));
console.log(map.get("potato"));

// Map, რომელიც ინახავს რამდენიმე ფილმის დასახელებას და მათ გამოშვების წელს. გამოიყენე has() მეთოდი, რათა შეამოწმო, არის თუ არა Map-ში გარკვეული ფილმის დასახელება და შესაბამისად დაბეჭდე შეტყობინება.

const films = new Map();

films.set("simba", 1994);
films.set("spiderman", 2002);
films.set("venom", 2018);

console.log(films.has("simba"));
console.log(films.has("spiderman"));
console.log(films.has("venom"));
console.log(films.has("football"));

// Map, რომელიც შეიცავს რამდენიმე სპორტსმენის სახელს და მათ შედეგებს. შემდეგ წაშალე ერთ-ერთი სპორტსმენი delete() მეთოდის გამოყენებით და დაადასტურე, რომ ის წაშლილია.

const players = new Map();

players.set("ronaldo", "football");
players.set("messi", "football");
players.set("neymar", "football");

console.log(players.delete("messi"));

// შექმენი Map რამდენიმე მანქანის ბრენდის და მათი მოდელების შესანახად. შემდეგ გამოიყენე clear() მეთოდი, რათა მთლიანად დაასუფთავო Map. შეამოწმე, რომ Map ცარიელია.

const vehicle = new Map(["BMW", "mercedes", "ferrari", "lamborgini"]);

if (vehicle === "") {
    console.log("Map is empty");
}

console.log(vehicle.clear());

// შექმენი Map, რომელიც ინახავს რესტორნების სახელებს და მათი მენიუს პოპულარულ კერძებს. გამოიყენე size თვისება, რათა კონსოლში დაბეჭდო ამ Map-ის ელემენტების რაოდენობა.

const restorants = new Map(["alfredo", "ქალაქური", "წისქვილი"]);

console.log(restorants.length());

// შექმენი Map, რომელიც შეიცავს სხვადასხვა ქვეყნის კოდებს და მათ სახელებს. გამოიყენე keys() მეთოდი, რათა ყველა ქვეყნის კოდი გამოიტანო და დაბეჭდო კონსოლში.

const countries = new Map();

countries.set("ქართული", "georgia");
countries.set("brazillian", "brazil");
countries.set("american", "america");

console.log(countries.keys());

// იმავე Map-ში, რომელიც წინა დავალებაში შექმენი, გამოიყენე values() მეთოდი, რათა ყველა ქვეყნის დასახელება გამოიტანო და დაბეჭდო კონსოლში.

console.log(countries.values());

// შექმენი Map, რომელიც ინახავს სხვადასხვა სასმელის დასახელებას და მათ კალორიებს. გამოიყენე forEach() მეთოდი, რათა კონსოლში დაბეჭდო თითოეული წყვილი შემდეგი ფორმატით: "Drink: [name], Calories: [calories]".

const drink = new Map();

drink.forEach(() => {
    map.set("", [""]);
})

map.set("drink name", "water")
map.set("calories")

console.log(map);