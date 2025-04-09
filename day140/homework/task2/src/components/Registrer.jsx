import Login from "./Login.jsx";
import Home from "./Home.jsx";

export default function Registrer() {
    return (
        <>
            <h1>Registrer</h1>
            <form action={Home}>
                <input type="text" name="name" placeholder="Enter your name" />
                <br />
                <input type="text" name="lastName" placeholder="Enter your last name" />
                <br />
                <input type="email" name="email" placeholder="Enter your email" required/>
                <br />
                <input type="password" name="password" placeholder="Create a password" />
                <br />
                <input type="password" name="comfirm" placeholder="Comfirm your password" />
                <br />
                <button>Submit</button>
                <br />
                <a href={Login}>Already have an account? <b><i>Login</i></b></a>
            </form>
        </>
    )
}