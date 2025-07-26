// 4) process.stdin - ის დახმარებით, შეამოწმეთ თუ მომხმარებელმა შემოიტანა 'bye' მაშინ გამოუტანეთ 'Goodbye' და გათიშეთ პროგრამა process.exit() - ის დახმარებით, სხვა შემთხვევაში კი ჩვეულებრივ გამოუტენთ მის მიერ შემოტანილი მნიშვნელობა

const events = require("events"); 
const myEvents = new events.EventEmitter();

myEvents.on("randomEvent", userInput => {
    if (userInput === "bye") {
        console.log("Goodbye")
        process.exit()
    } else if (userInput === "hi") {
        console.log("Hello")
    }
})

myEvents.emit("randomEvent", process.stdin.write("Enter something: "))