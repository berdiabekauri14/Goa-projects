import Registrer from "./Registrer.jsx";
import Home from "./Home.jsx";

export default function Login() {
    return (
        <>
            <h1>Login</h1>
            <form action={Home}>
                <input type="text" name="name" placeholder="Enter your name" />
                <br />
                <input type="email" name="email" placeholder="Enter your Email" required/>
                <br />
                <input type="password" name="password" placeholder="Enter your password" />
                <br />
                <button>Submit</button>
                <br />
                <a href={Registrer}>Don't have an account? <b><i>Registrer</i></b></a>
            </form>
        </>
    )
}