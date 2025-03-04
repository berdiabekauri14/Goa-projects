const setup = document.getElementById("setup");
const delivery = document.getElementById("delivery");
const btn = document.getElementById("btn");
const api = fetch("https://v2.jokeapi.dev/");

const renderInfo = () => {
    try {
        api
            .then(res => res.json)
            .then(res => console.log(res));

        setup.textContent = `Setup: ${api.setup}`;
        delivery.textContent = `Delivery: ${api.delivery}`;
    } catch {
        console.log("ERRRRRRRRROOOOOOOORRRRRRRR!!!!!!!!!!!!!!");
    }
}

document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();

    btn.onclick = renderInfo;
})