const root = document.getElementById("root");
const api = fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}")

const render = () => {
    try {
        api
            .then(res => res.json)
            .then(res => console.log(res))
            .catch(err => console.log(`Error: ${err}`))

        root.innerHTML = `
            <p>Message: ${api.message}</p>
        `
    } catch (err) {
        console.error(err);
    }
}

document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();

    render();
})