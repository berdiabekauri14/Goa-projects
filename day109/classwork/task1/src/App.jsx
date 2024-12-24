import { useState, useEffect } from "react";

export default function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log(setWidth(width));
      console.log(setHeight(height));
    })
  }, [])

  return (
    <main>
      <p>window width: {width}</p>
      <p>window height: {height}</p>
    </main>
  )
}