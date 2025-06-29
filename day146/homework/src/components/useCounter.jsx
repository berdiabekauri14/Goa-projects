import { useEffect } from "react";
import { useState } from "react";

export default function useCounter() {
    const [count, setCount] = useState(0);

    const increcment = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(count + 1)
    }, [count])

    return { count, increcment };
}