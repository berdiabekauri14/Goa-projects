// 1) დაა - import - ეთ 'events' module - ი, EventEmitter - ის დახმარებით შექმენით მოვლენა სახელად greet რომელსაც console ში გამოაქვს მისალმება მაგალითად 'Hello თქვენი სახელი', emit - მეთოდის დახმარებით გამოიძახეთ (გამოიწვიეთ) greet მოვლენა

const events = require("events"); 
const myEvents = new events.EventEmitter();

myEvents.on("greet", name => {
    console.log(`Hello ${name}`)
})

myEvents.emit("greet", "berdia")