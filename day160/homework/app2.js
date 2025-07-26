// 2) დაა - import - ეთ 'events' module - ი, შექმენით მოვლენა სახელად userJoined, რომელიც იღებს მომხმარებლის სახელს არგუმენტად და console ში გამოაქვს `User: ${username} has joined` გამოიყენეთ EventEmitter ობიექტში არსებული მეთოდი სახელად emit - ი იმისთვის რომ გამოიწვიოთ (გამოიძახოთ) მოვლენა

const events = require("events"); 
const myEvents = new events.EventEmitter();

myEvents.on("userJoined", username => {
    console.log(`User: ${username} has joined`)
})

myEvents.emit("userJoined", "Berdia123")