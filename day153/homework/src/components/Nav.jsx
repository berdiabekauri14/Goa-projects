import { Link } from "react-router"

export default function Nav() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/day153/homework/src/pages/Home.jsx">Home</Link></li>
                    <li><Link to="/day153/homework/src/pages/About.jsx">About</Link></li>
                    <li><Link to="/day153/homework/src/pages/Registrer.jsx">Registrer</Link></li>
                    <li><Link to="/day153/homework/src/pages/Profile.jsx">Profile</Link></li>
                </ul>
            </nav>
        </header>
    )
}