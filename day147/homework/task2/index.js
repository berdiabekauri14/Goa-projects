import { createRoot } from 'react-dom/client'

const div = document.getElementById("root")
const root = createRoot(div)

const tanmimdevroba = (
    <div>
        <h1>My Website</h1>
        <p>Welcome to my site!</p>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
)

root.render(tanmimdevroba);