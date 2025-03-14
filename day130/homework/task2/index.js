const sentence = document.getElementById("sentence");

const change = async () => {
    sentence.textContent = `Sentence: ${api.device}`
}

const renderInfo = async () => {
    try {
        let resp = await fetch("https://api.adviceslip.com/advice");
        if (!resp.ok()) {
            throw new Error("Error");
        }

        let data = await resp.json();
        render(data);

        await change();

        return data;

    } catch(err) {
        console.error(err);
    }
}

let info = await renderInfo();
console.log(info);