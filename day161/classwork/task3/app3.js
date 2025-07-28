const fs = require("fs")

fs.readFile("./file.txt", "utf-8", (err, data) => { // readFile მეთოდის მეშვეობით ჩვენ შეგვიძლია რომ წავიკითხოთ ფაილი და რამე რომ გადმოვიტანოთ მაქედან
    if (err) {
        console.error(`There is an error found in your code: ${err}`)
    } else {
        console.log(`File was succesfuly read: ${data}`)
    }
})