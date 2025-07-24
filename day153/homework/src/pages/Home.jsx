import React from "react"
import { Route, Routes } from "react-router"
import About from "./About"
import Registrer from "./Registrer"
import Profile from "./Profile"
import Posts from "../components/Posts.jsx"
import Nav from "../components/Nav.jsx"
import img from "../assets/chatbook.png"
import Login from "./Login.jsx"

export default React.memo(function Home() {
    return (
        <div className=" text-center">
            <header className=" text-shadow-white bg-blue-700 text-white">
                <h1 className=" underline text-2xl"><span className=" flex justify-center items-center"><img src={img} alt="img" width={100} /></span> Chatbook</h1>
                <br />
                <Nav />
            </header>
            <br />
            <h1 className=" text-2xl underline italic font-bold">Welcome to Chatbook!</h1>
            <br />
            <Routes>
                <Route path="/day153/homework/src/pages/About.jsx/*" element={<About />} />
                <Route path="/day153/homework/src/pages/Registrer.jsx/*" element={<Registrer />} />
                <Route path="/day153/homework/src/pages/Login.jsx/*" element={<Login />} />
                <Route path="/day153/homework/src/pages/Profile.jsx/*" element={<Profile />} />
            </Routes>
            <br />
            <main>
                <Posts />
            </main>
            <br />
            <footer className=" text-shadow-white bg-blue-700 text-white">
                <h1 className=" text-2xl underline">©2025 Berdia bekauri</h1>
            </footer>
        </div>
    )
})