import { useState } from "react"

export default function Component() {
    const [text, setText] = useState("")    

    const handleClick = () => {
        return <h1>{setText(text)}</h1>
    }

    return (
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}