class priceFormatter {
    constructor(price) {
        this.price = price;
    }

    get formatPrice() {
        console.log(`$${this.price}.00`);
    }
}

const formatPrice = new priceFormatter(100);

console.log(formatPrice)