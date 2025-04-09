import Registrer from "./Registrer.jsx";
import Login from "./Login.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

export default function Home() {
    return (
        <>
            <h1>Hello!</h1>
            <nav>
                <a href={Registrer}>Registrer</a>
                <a href={Login}>Login</a>
                <a href={About}>About</a>
                <a href={Contact}>Contact</a>
            </nav>
            <br />
            <img src="./assets/image.JPG" alt="img" />
        </>
    )
}