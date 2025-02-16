// 3) შექმენით ერთი სარეგისტრაციო ფორმა, სადაც გექნებათ მინიმუმ 5 შესატანი ველი, სახელი, გვარი, იმეილი პაროლი და საცხვორებელი ქალაქი, როდესაც ფორმა დადასტურდება მიღებუილი მონაცემებით უნდა იქმნდებოდეს ახალი ობიექტი კლასსის დახმარებით რომლის სახელიც არის Account შექმნილი ობიექტი კი უნდა ემატებოდეს მასივში სახელად accounts, დაამატეთ კლასს მეთოდი სახელად  printDetails რომელიც დაბეჭდავს კონკრეული ობიექტის ინფორმაციას რომელზეც გამოვიძახეთ

const form = document.querySelector('form');

const accounts = [];

class Account {
    constructor(firstname, lastname, email, password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }

    printDetails() {
        console.log(`Firstname: ${this.firstname}`);
        console.log(`Lastname: ${this.lastname}`);
        console.log(`Email: ${this.email}`);
        console.log(`Password: ${this.password}`);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstname = form.name.value;
    const lastname = form.lastname.value;
    const email = form.email.value;
    const password = form.password.value;

    const account = new Account(firstname, lastname, email, password);
    account.printDetails();
    accounts.push(account);
})