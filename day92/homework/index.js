const form = document.querySelector("form");
const div = document.querySelector("#movie");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = form.input.value;
    const data = fetch(`https://www.omdbapi.com/?t={movie_title}&apikey=${input}`);
    data.json();

    div.innerHTML = `
        <p>Movie name: ${input}</p>
        <p>Date realesed: ${data.date}</p>
        <p>Actor: ${data.actor}</p>
    `
})