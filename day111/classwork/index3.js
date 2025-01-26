// 3) შექმენით მანქანის და ელექტტონული მანქანის კლასი, გამოიყენეთ extends. ელექტროუნული კლასში შეცვალეთ ერთი მისი მშობელის მეთოდი და მეორე მეთოდზე დააშენეეთ ახალი ფუნქციონალი

class Car {
    constructor(type, maxSpeed, color) {
        this.type = type;
        this.maxSpeed = maxSpeed;
        this.color = color;
    }

    printInfo() {
        console.log(`type: ${this.type}`);
        console.log(`max speed: ${this.maxSpeed}`);
        console.log(`color: ${this.color}`);
    }
}

class ElectronicCar extends Car {
    constructor(type, maxSpeed, color, width, height) {
        super(type, maxSpeed, color);
        this.width = width;
        this.height = height;
    }

    printInfo() {
        console.log(`width: ${this.width}`);
        console.log(`height: ${this.height}`);
    }
}