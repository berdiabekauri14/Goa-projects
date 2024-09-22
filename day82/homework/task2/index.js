// Given an array of objects (e.g., users with `id` and `name`), use `map()` to create an array of strings that contains only the names.

const form = document.getElementById("form");
const btn = document.getElementById("btn");
const map = new Map()

const mapFunc = () => {
    const name = form.elements.name.value;
    const id = form.elements.id.value;

    if (name === "" || id === "") {
        alert("incorrect, please enter in all fields");
        return;
    } else if (name === "" && id === "") {
        alert("incorrect, please enter in all fields");
        return;
    }

    console.log(map.set("name", name));
    console.log(map.set("id", id));
}

btn.onclick = mapFunc;