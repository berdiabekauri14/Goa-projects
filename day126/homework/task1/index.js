const paragraph = document.getElementById("paragraph");
const api = fetch("https://jsonplaceholder.typicode.com/users");

const renderInfo = () => {
    try {
        api
            .then(res => res.json)
            .then(res => console.log(res));

        paragraph.textContent = `${api.name}`;
    } catch {
        console.log(`Error: ${Error}`);
    }
}

document.addEventListener("DOMContentLoaded", (e) => {
    renderInfo();
})