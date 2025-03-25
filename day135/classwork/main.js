import { render } from "./product.js";
import { addToCart } from "./cart.js";

export const product = document.getElementById("products");
export const cart = document.getElementById("cart");

render();
addToCart();