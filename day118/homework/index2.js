// მხოლოდ წაკითხვადი ველი – შექმენი კლასი, სადაც პირადი ველი შესაძლებელია მხოლოდ წაკითხვად იყოს და მისი შეცვლა კლასის გარედან შეუძლებელი იყოს. 

class Public {
    constructor(name) {
        this.name = name;
    }

    get printInfo() {
        console.log(`Hello ${this.name}`);
    }
}

const public = new Public("Berdia");
public.printInfo();