class ageInMonths {
    constructor(age) {
        this.age = age;
    }

    get age() {
        console.log(age * 12);
    }
}

const months = new ageInMonths(11);

console.log(months);