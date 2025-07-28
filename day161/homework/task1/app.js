// 1) შექმენით ერთი ფაილი text.txt მასში დაწერეთ რაიმე წინადადება, თქვენი დავალებაა რომ დაა - import - ოთ fs მოდული, წაიკითხოთ ფაილი readFile მეთოდის გამოყენებით და დაბეჭდოთ ის

const fs = require("fs")

fs.readFile("./text.txt", "utf8", (err, data) => {
    if (err) {
        console.error(`There was an error found in your code: ${err}`)
    } else {
        console.log(`File was succesfuly read: ${data}`)
    }
})