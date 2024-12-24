// 1) გამოიყენეთ vite რომ დააყენოთ ახალი პროექტი, თვქენი დავალებაა შექმნათ  App კომპონენტში 2 ელემენტი, პარაგრაფი და ღილაკი, ჭილაკზე დაკლიკებისას უნდა იმატებდეს მნიშვნელობა ერთით და განახლებული მნიშვნელობის გამოტანა უნდა მოხდეს ეკრანზე (მდგომარეობა)

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const increcement = () => {
    setCount(count + 1);
  }

  return (
    <main>
      <p>{count}</p>
      <button onClick={increcement}>+1</button>
    </main>
  )
}