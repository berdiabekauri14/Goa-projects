import { Route, Routes } from "react-router"
import Registrer from "./Registrer"
import Profile from "./Profile"
import React from "react"
import image from "../assets/img.JPG"
import Login from "./Login"

export default React.memo(function About() {
    return (
        <div id="about" className=" text-center">
            <header>
                <Routes>
                        <Route path="/day153/homework/src/pages/About.jsx/*" element={<About />} />
                        <Route path="/day153/homework/src/pages/Registrer.jsx/*" element={<Registrer />} />
                        <Route path="/day153/homework/src/pages/Login.jsx" element={<Login />} />
                        <Route path="/day153/homework/src/pages/Profile.jsx/*" element={<Profile />} />
                </Routes>
            </header>
            <main>
                <h1 className=" text-2xl">About us</h1>
                <br />
                <p>This site is made on 11 july 2025 by Berdia Bekauri</p>
                <br />
                <div className=" flex justify-center items-center">
                    <img src={image} width={400} alt="img" />
                </div>
            </main>
        </div>
    )
})