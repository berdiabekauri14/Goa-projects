import { useState, useEffect } from "react";

export default function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setInterval(() => {
        console.log("resized!");
        console.log(setWidth(width));
        console.log(setHeight(height));
      }, 1000)
    })

    window.removeEventListener("resize", () => {
      setTimeout(() => {
        console.log("clean terminal");
        console.log(setWidth(width));
        console.log(setHeight(height));
      }, 1000)
    })
  }, [])

  return (
    <main>
      <p>window width: {width}</p>
      <p>window height: {height}</p>
    </main>
  )
}