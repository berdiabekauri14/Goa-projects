const form = document.getElementById("form");
const tasks = document.getElementById("tasks");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = form.elements.input.value;

    tasks.innerHTML += `<li>${input}</li>`;

    form.elements.input.value = "";
})