// 2) 1 დავალების გაკეთება სცადეთ ხელახლა ამჯერად სინქრონიზირებულად fs.readFileSync - ის გამოყენებით, შეინახეთ ის ცვლადში და დაბეჭდეთ

const fs = require("fs")

const fileRead = fs.readFileSync("./text.txt", "utf8", (err, data) => {
    if (err) {
        console.error(`There was an error found in your code: ${err}`)
    } else {
        console.log(`File was succesfuly read: ${data}`)
    }
})

console.log(fileRead)