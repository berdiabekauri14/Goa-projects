// შექმენით 2 ფაილი, პირველ ფაილში შექმნით 2 ფუნქციას, greet და calculateAverage, თქვენი დავალებაა რომ ეს ფუნქციები გადაიტანოთ index.js-ში, commonJS-ის დახმარებით, მარტივად გააკეთეთ export/import

const greet = (name) => {
    console.log(`Hello ${name}`);
}

const calculateAverge = (num1, num2) => {
    console.log(num1 + num2);
}

module.exports = {greet, calculateAverge};