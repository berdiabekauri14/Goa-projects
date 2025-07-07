import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0)
    const [badCount, setBadCount] = useState(false)

    if (badCount) {
        throw new Error("bad count detected");
    }

    const increcment = () => {
        setCount(count + 1);
    }

    const badCountDetection = () => {
        setBadCount(true)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increcment}>+1</button>
            <p>{badCount ? false : badCountDetection}</p>
        </div>
    )
}