import { Route, Routes } from "react-router";
import Nav from "../components/Nav";

export default function Registrer() {
    // const handleSubmit = (e) => {
        // e.preventDefault()
    // }

    return (
        <div>
            <Nav />

            <h1>Registrer</h1>

            <form action={<Routes>
                <Route element="/day153/homework/src/pages/Home.jsx" />
            </Routes>}>
                <input type="email" placeholder="Enter your email" />
                <br />
                <input type="text" placeholder="Enter your name" />
                <br />
                <input type="password" placeholder="Enter your password" />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}