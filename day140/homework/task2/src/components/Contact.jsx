import Home from "./home";
import About from "./About";
import Registrer from "./Registrer";
import Login from "./Login";

export default function Contact() {
    const button = document.querySelector("button");
    const form = document.querySelector("form");

    const submitForm = () => {
        const email = form.email.value;
        const message = form.message.value;

        if (email == "" || message == "") {
            alert("Incorrect, Please enter in all fields");
            return;
        }

        alert("Message sent");
    }

    button.type = "submit"
    button.onclick = submitForm;

    return (
        <>
            <h1>Contact</h1>
            <br />
            <nav>
                <a href={Home}>Home</a>
                <a href={About}>About</a>
                <a href={Registrer}>Registrer</a>
                <a href={Login}>Login</a>
            </nav>
            <br />
            <form action={Home}>
                <input type="email" name="email" placeholder="Enter your Email" required />
                <br />
                <textarea name="message" placeholder="Enter your message"></textarea>
                <br />
                <button type="button">Submit</button>
            </form>
        </>
    )
}