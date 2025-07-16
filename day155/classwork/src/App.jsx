import { useMemo, useState } from "react"
import findPrimesUpTo from "./components/Prime"

export default function App() {
  const [num, setNum] = useState(0)
  const [text, setText] = useState("")

  const cache = useMemo(() => findPrimesUpTo(num), [num])

  console.log(cache)
  
  return (
    <div>
      <input type="number" value={num} onChange={e => setNum(parseInt(e.target.value))} />
      <input type="text" value={text} onChange={e => setText(parseInt(e.target.value))} />
    </div>
  )
}