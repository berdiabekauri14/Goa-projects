import { cart } from "./main.js";
import { productName } from "./product.js";

export default function addToCart() {
    cart.innerHTML = `
        <h1>Added to cart</h1>
        <p>${productName}</p>
    `
}