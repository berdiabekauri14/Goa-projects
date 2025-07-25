import { useContext } from "react"
import AuthContext from "../context/Auth";
import { Routes, Route } from "react-router"
import About from "./About";
import Registrer from "./Registrer";
import Profile from "./Profile";

export default function Login() {
    const {login} = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();

        const formData = {
            email: e.target.form.email,
            password: e.target.form.password
        }

        login(formData)
    }

    return (
        <div>
            <header>
                <Routes>
                    <Route path="/day153/homework/src/pages/About.jsx/*" element={<About />} />
                    <Route path="/day153/homework/src/pages/Registrer.jsx/*" element={<Registrer />} />
                    <Route path="/day153/homework/src/pages/Login.jsx/*" />
                    <Route path="/day153/homework/src/pages/Profile.jsx/*" element={<Profile />} />
                </Routes>
            </header>
            

            <h1 className=" text-2xl">Login</h1>

            <form name="form">
                <input className=" border-2 p-2 m-2 outline-0" type="email" name="email" placeholder="Enter your email" required />
                <br />
                <input className=" border-2 p-2 m-2 outline-0" type="password" name="password" placeholder="Enter your password" />
                <br />
                <button className=" border-2 border-blue-700 cursor-pointer p-2" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}