// 1) შექმენით ორი ფაილი, პირველის სახელი იყოს calculator.js ხოლო მეორე index.js, პირველ ფაილში შექმენით ფუნქცია რომელიც იღებს ორ არგუმენტს და ერთ ოპერაციას, გამოიყენეთ შესაბამის ოპერატორი რომ დააბრუნოთ ფუნქციიდან შედეგი, დააექსპორტეთეს ფუნქცია და გადაიტენეთ index.js ფაილში გამოიყენეთ module.exports და require() ახსენით რისთვის გამოიყენება თითოეული

const calculator = (num1, num2, sign) => {
    
    try {
        if (sign === "+") {
            return num1 + num2;
        } else if (sign === "-") {
            return num1 - num2;
        } else if (sign === "*") {
            return num1 * num2;
        } else if (sign === "/") {
            return num1 / num2;
        } else {
            return "Error";
        }
    } catch(error) {
        return `Incorrect, Must enter an number not an string. Code error: ${error}`
    }
}

// 2) იგივე ფაილში შექმენით ფუნქცია სახელად filter რომელსაც გადაეცემა ერთი მასივი და მეორე ფუნცია არგუმენტად, გადაუარეთ ფორ ციკლით მასივს და ყველა მნიშვნელობაზე გამოიძახეთ ფუნქცია რომელიც არგუმენტად მიიღეთ, მაგ ფუნქციას კი გადაეცით რიგრიგობით მნიშვნელობები, დაბრუნებული მნიშვნელობა კი შეინახეთ ახალ მასივში და დააბრუნეთ ეგ მასივი, filter and calculator ფუნქცია გადაიტანეთ  index.js ფაილში და ორივე გამოიძახეთ

const filter = (list, func) => {
    for (let i = 0; i < list.length; i++) {
        return func(1, 2, 3);
    }
}

export default {filter, calculator};