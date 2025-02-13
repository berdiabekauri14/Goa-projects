// შექმენით ლოგიკა რომლის მიხედვითაც მომხმარებელს უნდა შემოატანინოთ პაროლი თუ პაროლი სწორია alert-ის საშვალებით გამოიტანეთ რომ მას მიეცა წვდომა, ხოლო თუ არასწორია თავიდან შეეკითხეთ პაროლი და მოაკელით პაროლის მცდელობა, თავიდან მცდელობები არის 3 თუ მცდელობები ამოიწურა ითიშება while ციკლი, ყოველ ჯერზე უნდა გამოუტანოთ მცდელობების რაოდენობა (დაგჭირდებათ while ციკლი და if პირობითი განცხადება)

let authorized = false;
let count = 3;

while (authorized !== true && count > 0) {
    const pass = prompt("Enter your password:");
    
    if (pass === "berdia12345") {
        authorized = true;
        alert("Access granted!");
    } else {
        count--;
        alert("Access denied. You have " + count + " attempts left.");
    }
}