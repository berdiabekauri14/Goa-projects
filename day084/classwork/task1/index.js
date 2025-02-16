// 1) გადახედეთ ამ რესურს და გააკეთეთ რამდენიმე მაგალითი: https://javascript.info/

// 1)

const User = (name) => {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

console.log(user.name); // გამოიტანს Jack
console.log(user.isAdmin); // გამოიტანს false

// 2)

const User2 = (name) => {
    this.creator = false;
    this.admin = false;

    if (name === "Nika") {
        this.creator = true;
        return "Hello creator", creator;
    } else if (name === "Luka") {
        this.admin = true;
        return "Hello admin", admin;
    }
    
    console.log("Hello");
}

console.log(User2(prompt("Enter your name")));

// 2) https://javascript.info/class გადახედეთ კლასების შესახებ ამ ინფორმაციას, გააკეთეთ 10 სხვადასხვა საბაზისო მაგალითი თუ როგორ მუშაობს კლასი და აგრეთვე ახსენით კოემნბატრებით დეტალურათ რას ნიშნავს კლასი და როგორ მუშაობს ის + რას აკეთებს

// კლასები იმისთვის იყენება რომ შევქმნათ ჩვენი ობიეკტი, მაგალითად Date არის ობიეკტი და ეს ობიეკტი არის შექმნილი კლასების გამოყენებით, კლასის შექმნის დროს აუცილებლად დასაწყიში უნდა ქონდეს მისი კონსტრუქტორი, კონსტრუკტორი იმისთვის იყენება რადგან კონსტრუკტორი აინიზიალიზებს ამ ობიეკტს ჩვენ რასაც ვქმნით, და კონსტრუკტორი იმდროს გამოიძახება როცა ახალი ობიეკტი შეიქმენბა

// 1)

class myClass {
    constructor (name) {
        this.name = name;
    }

    aboutMe () {
        return `My name is ${this.name}`;
    }
}

const myClassi = new myClass("berdia");
print(myClassi);

// 2)

class Sum {
    constructor (num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    sumNumbers () {
        return num1 + num2;
    }
}

const sumTheseNumbers = new Sum(1, 1);
console.log(sumTheseNumbers);

// 3)

class Subtraction {
    constructor (num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    subtractNumbers () {
        if (num2 > num1) {
            return num2 - num1;
        }

        return num1 - num2;
    }
}

const subtractTheseNumbers1 = new Subtraction(2, 1);
const subtractTheseNumbers2 = new Subtraction(1, 2);
console.log(subtractTheseNumbers1);
console.log(subtractTheseNumbers2);