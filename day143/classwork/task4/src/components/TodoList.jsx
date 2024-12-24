import { useState, useEffect } from "react";

export default function TodoList() {
    const input = document.querySelector("input").value;
    const [todoList, setTodoList] = useState(input);

    useEffect((e) => {
        e.preventDefault();
        const items = [];

        items.push(
            setTodoList(todoList);
        )
    }, [])

    return (
        <main>
            <form>
                <input type="text" placeholder="Enter an task" />
            </form>
            <br />
            <ul>
                {
                    items.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })
                }
            </ul>
        </main>
    )
}