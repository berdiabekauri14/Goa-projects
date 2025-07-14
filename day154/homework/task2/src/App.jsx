import { useMemo } from "react";
import { useState } from "react";
import TextLength from "./components/TextLength";

export default function App() {
    const [text, setText] = useState("")

    const cache = useMemo(() => TextLength(text), [text])

    return (
        <div>
            <input type="text" value={text} onChange={e => setText(parseInt(e.target.value))} />
            <h1>{cache}</h1>
        </div>
    )
}