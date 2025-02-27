class discountPrice {
    constructor(price, discount) {
        this.price = price;
        this.discount = discount;
    }

    get priceDiscount() {
        console.log(`Original price: ${this.price}`);
        
        if (this.discount > this.price) {
            console.log(`Discount price: ${this.discount - this.price}`);
        }

        console.log(`Discount price: ${this.price - this.discount}`);
    }
}

const priceDiscount = new discountPrice(100, 1);

console.log(priceDiscount)