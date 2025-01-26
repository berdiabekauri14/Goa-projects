// 1) შექმენით წიგნების კლასი ორი ჩვეულებრივი მეთოდით, ერთი გეთერ მეტოით და სამი ფროფერთით. შექმენით სამი წიგნის ჟანრის კლასი (მაგ. სათავგადასავლო, სატირა, ფანტაზია), სამივე მემკვიდრე წიგნის კლასის. თითოეულს უნდა ჰქონდეს ერთი მშობელი კლასის მთლიანად შეცვლილი მეთოდი, მეორე ერთ ერთ მეთოდზე დაშეენებული მეთოდი ( მშობელი კლასის მეთოდი + ახალი ფუნქციონალი ), და ერთი სუილად ახალი, უნიკლარი მეთოდი. ასევე თითოეულს უნდა ჰქონდეს ორი ახალი ფროფერთი.

class Book {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }

    printInfo() {
        console.log(`book name: ${this.name}`);
        console.log(`author: ${this.author}`);
        console.log(`year: ${this.year}`);
    }
}

class Advanture extends Book {
    constructor(name, author, year, genre) {
        super(name, author, year);
        this.genre = genre;
    }

    printInfo() {
        console.log(`book name: ${this.name}`);
        console.log(`author: ${this.author}`);
        console.log(`year: ${this.year}`);
        console.log(`genre: ${this.genre}`);
    }
}

class Satire extends Book {
    constructor(name, author, year, genre) {
        super(name, author, year);
        this.genre = genre;
    }

    printInfo() {
        console.log(`book name: ${this.name}`);
        console.log(`author: ${this.author}`);
        console.log(`year: ${this.year}`);
        console.log(`genre: ${this.genre}`);
    }
}

class Detective extends Book {
    constructor(name, author, year, genre) {
        super(name, author, year);
        this.genre = genre;
    }

    printInfo() {
        console.log(`book name: ${this.name}`);
        console.log(`author: ${this.author}`);
        console.log(`year: ${this.year}`);
        console.log(`genre: ${this.genre}`);
    }
}

const book = new Book("tom saywer", "mark tven", 1876, "adventure");
book.printInfo();