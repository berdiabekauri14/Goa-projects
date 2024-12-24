// 2) შექმენით პროექტი სახელად todolist

import { useState } from "react";

export default function App() {
  const input = document.querySelector("input").value;
  const [todo, setTodoList] = useState(input);

  const handleSubmit = (e) => {
    e.preventDefault();
    const items = [];

    items.push(
      setTodoList(todo)
    )
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <br />
        <button>Submit</button>
      </form>
      <br />
      <ul>
          {
            items.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
      </ul>
    </main>
  )
}