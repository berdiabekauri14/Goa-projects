const form = document.getElementById("form");
const accountsDiv = document.getElementById("accounts");

class Account {
    #age;
    static #accounts = [];

    constructor(name, age, lastname) {
        this.name = name;
        this.#age = age;
        this.lastname = lastname;

        Account.#addAccount(this);
    }
    
    static #addAccount(account) {
        Account.#accounts.push(account);
        console.log(account);
        console.log(Account.#accounts)
        Account.#displayAccounts();
    }

    static #displayAccounts() {
        accountsDiv.innerHTML = "";
        for(const acc of Account.#accounts) {
            accountsDiv.innerHTML += `<p>${acc.lastname} - ${acc.name}</p>`;
        }
    }

}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.name.value;
    const age = form.age.value;
    const lastname = form.lastname.value;

    new Account(name, age, lastname);
})