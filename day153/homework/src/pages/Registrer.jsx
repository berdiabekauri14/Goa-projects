import { Route, Routes } from "react-router";
import Home from "./Home"
import About from "./About"
import Profile from "./Profile"
import React from "react";

export default React.memo(function Registrer() {
    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = {
            email: e.target.email.value,
            name: e.target.name.value,
            password: e.target.password.value
        }

        if (formData.email === "" || formData.name === "" || formData.password === "") {
            alert("Please fill all the fields");
            return;
        }

        console.log(formData)

        alert("Registrer complete")
    }

    return (
        <div>
            <header>
                <Routes>
                    <Route path="/day153/homework/src/pages/Home.jsx" element={<Home />} />
                    <Route path="/day153/homework/src/pages/About.jsx" element={<About />} />
                    <Route path="/day153/homework/src/pages/Registrer.jsx" element={<Registrer />} />
                    <Route path="/day153/homework/src/pages/Profile.jsx" element={<Profile />} />
                </Routes>
            </header>
            

            <h1 className=" text-2xl">Registrer</h1>

            <form action={<Routes>
                <Route path="/day153/homework/src/pages/Home.jsx" element={<Home />} />
            </Routes>}>
                <input className=" border-2 p-2 m-2" type="email" name="email" placeholder="Enter your email" required />
                <br />
                <input className=" border-2 p-2 m-2" type="text" name="name" placeholder="Enter your name" />
                <br />
                <input className=" border-2 p-2 m-2" type="password" name="password" placeholder="Create a password" />
                <br />
                <button onClick={handleSubmit} className=" border-2 cursor-pointer">Submit</button>
            </form>
        </div>
    )
})