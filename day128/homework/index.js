const img = document.getElementById("img");
const btn = document.getElementById("btn");
const [api, api2, api3] = [fetch("https://api.thecatapi.com/v1/images/search"), fetch("https://dog.ceo/api/breeds/image/random"), fetch("https://randomfox.ca/floof/")];

const render = () => {
    api
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(`Error fkound in your code: ${err}`))
    api2
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(`Error fkound in your code: ${err}`))
    api3
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(`Error fkound in your code: ${err}`))

    img.src = api;
    img.src = api2;
    img.src = api3;
}

btn.onclick = render;