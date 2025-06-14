import { useState } from "react"

export default function Qn() {
    const arr = ["Do you love reading books?", "Do you prefer being alone or being with someone?", "How old are you?"]
    const question = document.getElementById("question")


    const [index, setIndex] = useState(0)

    const next = () => {
        question.textContent = setIndex(index + 1)
    }

    const previous = () => {
        question.textContent = setIndex(index - 1)
    }

    return (
        <div>
            <button onClick={next}>previous</button>
            <button onClick={previous}>next</button>
            
            <p id="question">{arr[0]}</p>
        </div>
    )
}