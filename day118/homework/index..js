// პირადი ველების შექმნა – შექმენი კლასი, რომელიც შეიცავს ერთ ან მეტ პირად ველს და უზრუნველყოს მათი ინკაფსულაცია.
// getter და setter მეთოდები – დაამატე getter და setter მეთოდები პირადი ველებისთვის, რათა მათთან წვდომა კონტროლდეს.


class Private {
    #age = 11
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    get printInfo() {
        print(`Hello my name is, ${this.name} ${this.surname}. I'm  ${this.#age} years old`);
    }
}

const private = new Private("Berdia", "bekauri");
private.printInfo();