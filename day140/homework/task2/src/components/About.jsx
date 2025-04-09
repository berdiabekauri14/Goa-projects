import Home from "./home";
import Contact from "./Contact";
import Registrer from "./Registrer";
import Login from "./Login";

export default function About() {
    return (
        <>
            <h1>About</h1>
            <br />
            <nav>
                <a href={Home}>Home</a>
                <a href={Contact}>Contact</a>
                <a href={Registrer}>Registrer</a>
                <a href={Login}>Login</a>
            </nav>
            <br />
            <div>
                <img src="./assets/image.JPG" alt="img" />
                <br />
                <p>My name is berdia bekauri, i am 12 years old, My hobby is: programming, playing chess, sience, astronomy, math and physics. My programming languages are python, javascript, react and c</p>
            </div>
        </>
    )
}