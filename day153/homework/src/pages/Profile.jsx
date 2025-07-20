import React from "react"
import { Route, Routes, Link } from "react-router"
import Home from "./Home"
import About from "./About"
import Registrer from "./Registrer"
import Posts from "../components/Posts"

export default React.memo(function Profile() {
    return (
        <div>
            <header>
                <Routes>
                    <Route path="/day153/homework/src/pages/About.jsx/*" element={<About />} />
                    <Route path="/day153/homework/src/pages/Registrer.jsx/*" element={<Registrer />} />
                    <Route path="/day153/homework/src/pages/Profile.jsx/*" element={<Profile />} />
                </Routes>
            </header>

            <h1>Your profile</h1>
            <br />
            <h2>Berdia bekauri</h2>
            <br />
            <h3>This account was created in: <span className=" underline text-2xl">{Date()}</span></h3>
            <main>
                <Posts />
            </main>
        </div>
    )
})