import { Route, Routes } from "react-router"
import Home from "./Home"
import Registrer from "./Registrer"
import Profile from "./Profile"
import React from "react"

export default React.memo(function About() {
    return (
        <div>
            <header>
                <Routes>
                        <Route path="/day153/homework/src/pages/Home.jsx/*" element={<Home />} />
                        <Route path="/day153/homework/src/pages/About.jsx/*" element={<About />} />
                        <Route path="/day153/homework/src/pages/Registrer.jsx/*" element={<Registrer />} />
                        <Route path="/day153/homework/src/pages/Profile.jsx/*" element={<Profile />} />
                </Routes>
            </header>
            <main>
                <h1>About us</h1>
                <p>This site is made on 11 july 2025 by Berdia Bekauri</p>
            </main>
        </div>
    )
})