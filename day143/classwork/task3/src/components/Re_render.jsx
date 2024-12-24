import { useEffect } from "react";

export default function ReRender() {

    useEffect(() => {
        console.log("re-rendered!");
    }, [])


    return (
        <main>
            <h1>Hello, World!</h1>
        </main>
    )
}