// 3) process.stdin - ის დახმარებით მომხმარებელს შემოატანინეთ password - ი, იმ შემთხვევაში თუ მომხმარებელმა შემოიტანა 'securedPassword123' მაგ შემთხვევაში console - ში დაბეჭდეთ რომ Access granted სხვა შემთხვევაში კი, გამოუტანეთ Wrong password, process.stdout.write  - ის დახმარებით მომხმარებელს მოსთხოვეთ რომ გამოიცნოს (პაროლი) password

const events = require("events"); 
const myEvents = new events.EventEmitter();

myEvents.on("enterPassword", (pass, corPass) => {
    if (pass === corPass) {
        console.log("access granted");
    } else {
        console.log("wrong password")
    }
})

myEvents.emit("enterPassword", process.stdout.write("Enter your password"), process.stdin.write("securedPassword123"))