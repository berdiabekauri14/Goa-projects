const div = document.getElementById("div");
const dataFetch = fetch("https://fakestoreapi.com/products");

const render = () => {
    try {
        const dataJson = dataFetch.json();

        div.innerHTML = `
            <p>product name: ${dataJson.name}</p>
            <p>product price: ${dataJson.price}</p>
        `
    } catch {
        console.log("Error");
    }
}

document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();

    render()
})