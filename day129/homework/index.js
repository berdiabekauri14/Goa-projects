const div = document.getElementById("div");
const api = fetch("https://jsonplaceholder.typicode.com/users")

const render = () => {
    try {
        api
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(`Error: ${err}`))

        div.textContent = `
            <h1>${api.id.name}</h1>
            <p>website: ${api.id.website}</p>
            <p>street: ${api.id.street.street}</p>
        `
    } catch {
        console.log("Error");
    }
}

document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();

    render();
})