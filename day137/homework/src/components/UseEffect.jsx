import { useEffect } from "react";
import { useState } from "react"

export default function Func() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }
    
    useEffect(() => {
        console.log(`Count: ${setCount + 1}`);
    }, [])

    return (
        <main>
            <button onClick={increment}>+1</button>
            <p>{count}</p>
        </main>
    )
}