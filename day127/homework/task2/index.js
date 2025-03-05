const img = document.getElementById("img");
const btn = document.getElementById("btn");
const api = fetch("https://dog.ceo/api/breeds/image/random");

const renderInfo = () => {
    try {
        api
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(`There was an error found in your code: ${err}, code status: ${res.status}`))

        img.src = api.message;
    } catch {
        console.log(`Error: ${Error}`);
    }
}

document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();

    btn.onclick = renderInfo;
})