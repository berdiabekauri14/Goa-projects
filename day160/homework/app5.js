// 5) process.stdin - ის დახმარებით მომხმარებელს შემოატანინეთ რაიმე string - ი, რომელსაც შემდეგ გადააქცევთ upperCase - ში მაგალითად - 

// User types 'hello' output 'HELLO'

const events = require("events"); 
const myEvents = new events.EventEmitter();

myEvents.on("upperCase", str => {
    console.log(str.toUpperCase())
})

myEvents.emit("upperCase", process.stdin.write("Enter a string"))