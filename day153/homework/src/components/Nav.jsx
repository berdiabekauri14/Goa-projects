import React, { useContext } from "react"
import { Link } from "react-router"
import AuthContext from "../context/Auth"

export default React.memo(function Nav() {
    const {user, logout} = useContext(AuthContext)

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/day153/homework/src/pages/Home.jsx">Home</Link></li>
                    <li><Link to="/day153/homework/src/pages/About.jsx">About</Link></li>
                    <li><Link to="/day153/homework/src/pages/Registrer.jsx">Registrer</Link></li>
                    <li><Link to="/day153/homework/src/pages/Login.jsx">Login</Link></li>
                    <li><Link to="/day153/homework/src/pages/Profile.jsx">Profile</Link></li>
                    {
                        user !== null ? (
                            <li onClick={logout}>Logout</li>
                        ) : (
                            <li></li>
                        )
                    }
                </ul>
            </nav>
        </header>
    )
})