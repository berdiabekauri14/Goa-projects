import { useState } from "react";

export default function App() {
  // Vite-ის დახმარებით replit-ში შექმენით პროექტი counter, თქვენი დავალებაა რომ საიტზე გამოიტანოთ ღილაკი "Increment" რომელზე დაჭერსისასაც count ცვლადის მნიშვნელობა გაიზრდება 1-ით და მაშინვე გამოჩნდება განახლებული მნიშვნელობა საიტზე. ამისთვის App.jsx-ში main თეგში შექმენით ღილაკი და გამოიყენეთ onClick მოვლენის მსმენელი, ზევით უდნა გქონდეთ ფუნქცია რომელიც გამოძახებისას ცვლადის მნიშვნელობას გაზრდის 1-ით, იმისთვის რომ შედეგი მაშინვე დაფიქსირდეს მოიძიეთ ინფორმაცია React-ში State (მდგომარეობის) შესახებ.
  
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }
  
  return (
    <main>
        <button onClick={increment}>increase</button>
        <p>{count}</p>
    </main>
  )
}
