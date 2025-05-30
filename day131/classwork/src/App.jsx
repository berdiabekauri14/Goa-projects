import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

export default function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <br />
      <main>
        <About />
        <br />
        <Contact />
      </main>
      <br />
      <footer>
        <p>©2025 Berdia Bekauri</p>
      </footer>
    </>
  )
}