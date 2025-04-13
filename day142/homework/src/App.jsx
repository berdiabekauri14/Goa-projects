import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Signup from "./components/Signup"
import Login from "./components/Login"

export default function App() {
  return (
    <>
      <header>
        <Home />
      </header>
      <br />
      <main>
        <About />
        <br />
        <Contact />
      </main>
      <br />
      <footer>
        <Signup />
        <br />
        <Login />
        <br />
        <div className=" bg-blue-700 text-white text-center text-shadow-white underline"><p>©2025 Berdia Bekauri</p></div>
      </footer>
    </>
  )
}