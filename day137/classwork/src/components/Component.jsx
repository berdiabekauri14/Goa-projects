import { useState } from "react"

export default function Comp() {
    const [fact, setFact] = useState("");
    

    const render = () => {
        const api = fetch("https://catfact.ninja/fact")

        try {
            const Json = api.json();
            const p = document.getElementById("p");
    

            setFact(fact);
            p.textContent = `${Json.fact}`;
    
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <main>
            <p id="p">Facts about cats</p>
            <br />
            <button onClick={render}>Generate</button>
        </main>
    )
}