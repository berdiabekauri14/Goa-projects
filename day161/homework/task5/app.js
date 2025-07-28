// 4) შექმენით ფაილი text1.txt მასში შეინახეთ რაიმე სიტყვები, თქვენი დავალებაა რომ fs.readFile - ის დახმარებით წაიკითხოთ ფაილი და console - ში დაბეჭდოთ, სიტყვები upperCase() - ში

const fs = require("fs")

fs.readFile("./text1.txt", "utf8", (err, data) => {
    if (err) {
        console.error(`There was an error found in your code: ${err}`)
    } else {
        console.log(`File was succesfuly read: ${data.toUpperCase()}`)
    }
})