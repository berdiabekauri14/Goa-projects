// 2) გადაეცით მოვლენის გამოძახებისას მოვლენის მართველ ფუყნქციოას მინიმუმ 2 არგუმენტი და დაბეჭდეთ ისინი კონსოლში

const events = require("events"); 
const myEvents = new events.EventEmitter();

myEvents.on("click", (name, lastname) => {
    console.log("clicked!")
    console.log(`my name is ${name} ${lastname}`)
})

myEvents.on("submit", (age, hobby) => {
    console.log("submitted!")
    console.log(`i am ${age} and my hobby is ${hobby}`)
})

myEvents.emit("click", "berdia", "bekauri")
myEvents.emit("submit", 12, "spreading the gospel")