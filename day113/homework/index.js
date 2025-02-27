class initialGetter {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }

    get printInfo() {
        console.log(`${this.name} ${this.lastname}`);
    }
}

const getter = new initialGetter("Berdia", "Bekauri");

console.log(getter);