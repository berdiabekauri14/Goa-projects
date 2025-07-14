import { Link } from "react-router"

export default function Nav() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                </ul>
            </nav>
        </header>
    )
}