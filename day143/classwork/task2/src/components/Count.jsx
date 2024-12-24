import { useState, useEffect } from "react";

export default function Count() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(count + 1);
    })

    return (
        <main>
            <p>{count}</p>
            <button>+1</button>
        </main>
    )
}