// 1) შექმენით ოთკუთხედის კლასი სიგრძის და სიგანის ფროფერთით და გეთერ მეთოდი მისი პერიმეტრისთვის

class Square {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get square() {
        console.log(`width: ${this.width}`);
        console.log(`height: ${this.height}`);
    }
}

const SQuare = new Square(300, 300);
SQuare.square();