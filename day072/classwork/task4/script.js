// შექმენით ფუნქცია რომელსაც დაარქმევთ generate even ამ ფუნქციას უნდა გადაეცემოდეს border, ჩვენი დავალებაა რომ შევქმნათ ახალი მასივი შემდეგ მასივში დავამატოთ 0-იდან border რიცხვის ჩათვლით და დავარუნოთ მასივი, ხოლო დაბუნებული მასივი უნდა გადავცემთ შემდეგ ფუნქციას calculateSum, თქვენი დავალებაა რომ for ციკლის საშვალებით გამოვიანგარიშოთ ყველა რიცხვის ჯამი და დავაბრუნოთ

function generateEven(border) {
    const numbers = [];

    for (let i = 0; i < border; i++) {
        if (i % 2 === 0) {
            numbers.push(i);
        }
    }

    return numbers;
}

console.log(generateEven(10))

function calculateSum(numbers) {
    const totalSum = 0
    for (let i = 0; i < numbers.length; i++) {
        totalSum += numbers;
    }
}

console.log(calculateSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));