const form = document.querySelector("form");
const user = document.getElementById("userInformation");
const link = fetch("https://api.github.com/users/{username}");
const btn = document.getElementById("btn");

const githubUser = () => {
    const input = form.username.value;

    user.innerHTML = `
        <p>user: ${fetch(`https://api.github.com/users/${input}`)}</p>
    `
}

btn.onclick = githubUser();