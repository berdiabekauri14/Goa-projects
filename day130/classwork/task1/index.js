const img = document.getElementById("img");
const btn = document.querySelector("button");

const change = async () => {
    img.src = resp.message;
}

const renderInfo = async () => {
    try {
        let resp = await fetch("https://dog.ceo/api/breeds/image/random");
        if (!resp.ok()) {
            throw new Error("Error");
        }

        let data = await resp.json();
        render(data);

        btn.onclick = await change;

        return data
    } catch(err) {
        console.error(err);
    }
}

let info = await renderInfo();
console.log(info);