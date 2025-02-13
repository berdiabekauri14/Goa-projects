// Create a basic library system using classes and inheritance. Start by defining a LibraryItem class, which will represent general items in the library. This class should have properties for title, year, and isAvailable (which starts as true). Add methods for borrowItem() and returnItem(), which change the availability status of the item. If the item is already borrowed, borrowItem() should display a message indicating it’s not available.

// Next, create two classes that inherit from LibraryItem: Book and Magazine. The Book class should have additional properties, like author and genre, and a getSummary() method that returns information about the book. Similarly, the Magazine class should include an issueNumber property and its own getSummary() method. Finally, create instances of Book and Magazine, test borrowing and returning items, and use getSummary() to display each item’s details. 

class LibraryItem {
    constructor(title, year, isAvaible) {
        this.title = title;
        this.year = year;
        this.isAvaible = isAvaible;
    }

    borrowItem() {
        if (this.isAvaible === false) {
            return `${this.title} is already borrowed`;
        }

        return `You have borrowed ${this.title}`;
    }

    returnItem() {
        if (this.isAvaible === true) {
            return `${this.title} is already in the libary`;
        }

        return `You have returned ${this.title}`;
    }
}

class Book extends LibraryItem {
    constructor(author) {
        this.author = author;
    }

    getSummary() {
        return `The author of the book is ${this.author}`;
    }
}

class Magazine extends LibraryItem {
    constructor(issueNumber) {
        this.issueNumber = issueNumber;
    }

    getSummary() {
        return `The Magazine has ${this.issueNumber} issue numbers`;
    }
}

const libary = new LibraryItem("harry potter", 1933, true);
console.log(libary);