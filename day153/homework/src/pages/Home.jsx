import { Route, Routes } from "react-router"
import About from "./About"
import Login from "./Login"
import Registrer from "./Registrer"
import Profile from "./Profile"
import Posts from "./src/components/Posts.jsx"
import Nav from "../components/Nav.jsx"

export default function Home() {
    return (
        <div>
            <header>
                <Nav />

                <Routes>
                    <Route path="/day153/homework/src/pages/Home.jsx" element={<Home />} />
                    <Route path="/day153/homework/src/pages/About.jsx" element={<About />} />
                    <Route path="/day153/homework/src/pages/Login.jsx" element={<Login />} />
                    <Route path="/day153/homework/src/pages/Registrer.jsx" element={<Registrer />} />
                    <Route path="/day153/homework/src/pages/Profile.jsx" element={<Profile />} />
                </Routes>
            </header>
            <main>
                <Posts />
            </main>
        </div>
    )
}