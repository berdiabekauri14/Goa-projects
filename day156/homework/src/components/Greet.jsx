import { useCallback } from "react";
import { useState } from "react"
import Counter from "./Counter";

export default function Greet() {
    const [count, setCount] = useState(0);

    const setIncrecment = useCallback(() => {
        return setCount(count + 1)
    }, [count])
    
    return (
        <div>
            <Counter />
            <br />
            <button onClick={setIncrecment}>click me</button>
        </div>
    )
}