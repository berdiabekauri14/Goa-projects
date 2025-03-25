import { dataBase, signUp, Authorize } from "./auth.js";

const cart = document.getElementById("cart");
const form = document.querySelector("form");

console.log(dataBase);
signUp();
Authorize();

const addToCart = () => {
    const inp = form.cart.value;

    cart.innerHTML = `
        <li>${inp}</li>
    `
}

addToCart();