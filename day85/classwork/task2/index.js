// 2) შექმენით კლასი გამოიყენეთ ყველა ნასწავლი მასალა და ახსენით კომენტარებით, საჯარო და პირადული ველები, set and get methods, static methods, static private fields or methods

class myObject {
    // საჯარო ველები
    #age;

    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        // პირადი ველები
        this.#age = age
    }
}

const object = new myObject();

console.log(object);