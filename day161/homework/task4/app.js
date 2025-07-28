// 3) თქვენი დავალებაა რომ fs.readFile - ს გადასცეთ არასწორი ფაილის მისამართი (რომელიც არ არსებობს), ეს გამოიწვევს error - ს, იმ შემთხვევაში თუ error - ი (შეცდომა) დაფიქსირდა დაბეჭდეთ რომ 'File path incorrect', სხვა შემთხვევაში კი დაბეჭდეთ ფაილის content - ი

const fs = require("fs")

fs.readFile("./txt.txt", "utf8", (err, data) => {
    if (err) {
        console.error("File path incorrect")
    } else {
        console.log(`File was succesfuly read: ${data}`)
    }
})