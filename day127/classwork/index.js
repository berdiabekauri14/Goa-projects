const div = document.getElementById("root");
const api = fetch("https://fakestoreapi.com/products/1");

const renderInfo = () => {
    api
        .then(res => res.json)
        .then(res => console.log(res))
        .catch(err => console.log(`There was an error found in your code, error: ${err}, status: ${res.status}`))
    
    div.innerHTML = `
        <h1>Title: ${api.title}</h1>
        <p>Price: ${api.price}</p>
        <p>Description: ${api.description}</p>
        <p>Rating: ${api.rate}</p>
        <img src="${api.image}" alt="img" />
    `
}

document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();

    renderInfo();
})