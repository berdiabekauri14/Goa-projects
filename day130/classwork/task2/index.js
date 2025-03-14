const btn = document.getElementById("btn");
const setup = document.getElementById("setup");
const deliver = document.getElementById("deliver");

const change = async () => {
    setup.textContent = `Setup: ${resp.setup}`;
    deliver.textContent = `Deliver: ${resp.deliver}`;
}

const renderInfo = async () => {
    try {
        let resp = await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode");
        if (!resp.ok()) {
            throw new Error("Error");
        }

        let data = await resp.json();
        render(data);

        btn.onclick = await change;

        return data;

    } catch(err) {
        console.error(err);
    }
}

let info = await renderInfo();
console.log(info);