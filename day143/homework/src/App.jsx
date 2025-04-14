import { useState } from "react";

export default function App() {
  const [setText, text] = useState("");
  const Urname = "Berdia";
  const name = document.getElementById("name")
  const p = document.querySelector("p");
  const div = document.querySelector("div");

  const test = () => {
    if (name === Urname) {
      p.textContent = setText(text)
    } else {
      div.innerHTML += `<input type="text" id="text" placeholder="Enter an text" />`;
      p.textContent = document.getElementById("text").value;
    }
  }

  return (
    <div>
      <input type="text" id="name" placeholder="enter your name" required />
      <p>Text</p>
      <button onClick={test}>Change text</button>
    </div>
  )

}