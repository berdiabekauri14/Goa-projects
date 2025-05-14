const form = document.querySelector("form");

export default function func() {
    e.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const database = []

    if (name === "" || email === "" || message === "") {
        alert("Incorrect, please fill in all fields");
        return;
    }

    database.push({
        Name: name,
        Email: email,
        Message, message
    })

    console.log(database)

    alert("Message sent");
}