// შექმენი BankAccount კლასი - რომელსაც ექნება პირადი ველი #balance. დაამატე getBalance() მეთოდი, რომელიც აბრუნებს ბალანსს და deposit(amount) მეთოდი, რომელიც ანგარიშზე თანხას დაამატებს. ბალანსზე პირდაპირი წვდომა გარედან არ უნდა იყოს შესაძლებელი.

class BankAccount {
    #balance
    constructor(account) {
        this.account = account;
    }

    set getBalance(deposit) {
        console.log(`Your balance is now ${this.#balance + deposit}`)
    }

    Bank() {
        console.log(`Welcome back ${account}`);
        const choose = Number(prompt("Choose a number from 1 to 3: "));
        console.log("1. Balance")
        console.log("2. Deposit")
        console.log("3. Exit");

        if (choose === 1) {
            console.log(`Your balance is ${this.#balance}`);
        } if (choose === 2) {
            this.getBalance(Number(prompt("Enter your deposit amount: ")))
        } if (choose === 3) {
            console.log(`Goodbye, ${this.account}!`);
        } else {
            console.log("That not an option");
        }
    }
}

const bank = new BankAccount("Berdia");
bank.Bank();