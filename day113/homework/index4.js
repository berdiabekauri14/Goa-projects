class isOld {
    constructor(age) {
        this.age = age;
    }

    get isRetired() {
        if (age >= 60) {
            console.log(true);
        }

        console.log(false);
    }
}

const isRetired = new isOld(11);

console.log(isRetired)