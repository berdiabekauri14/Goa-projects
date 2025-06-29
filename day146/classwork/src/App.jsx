import "App.css"
import useTheme from "./components/useTheme"

export default function App() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <h1>{theme === "light" ? "Light mode" : "Dark mode"}</h1>
      <button onClick={setTheme}>click me</button>
      <main>
        <h1>hello</h1>
      </main>
    </div>
  )
}