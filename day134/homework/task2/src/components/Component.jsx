import { useState } from "react"

export default function Component() {
    const [content, setContent] = useState("")
    const p = document.getElementById("p")

    const handleClick = () => {
        p.textContent = setContent(content)
    }

    return (
        <div>
            <button onClick={handleClick}>Textcontent</button>
            <p id="p">Secret message here</p>
        </div>
    )
}