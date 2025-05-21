const form = document.querySelector("form");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const btn = document.getElementById("b");

export default function func() {
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const database = [];

    if (name === "" || email === "" || message === "") {
        alert("Incorrect, please fill in all fields");
        return;
    } if (name === "berdia" && email === "berdiabekauri5@gmail.com") {
        header.style.backgroundColor = "green";
        footer.style.backgroundColor = "green";
        
        btn.style.color = "green";
        btn.onmouseover = () => {
            btn.style.backgroundColor = "green";
            btn.style.color = "white";
        }
    }

    database.push({
        Name: name,
        Email: email,
        Message, message
    })

    console.log(database)

    alert("Message sent");
}