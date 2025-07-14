import { useMemo, useState } from "react"
import findPrimesUpTo from "./components/FindPrimes"

export default function App() {
  const [num, setNum] = useState(0)

  const cache = useMemo(() => findPrimesUpTo(num), [num])

  return (
    <div>
      <h1>{cache}</h1>
      <input type="number" value={num} onChange={e => setNum(parseInt(e.target.value))} />
    </div>
  )
}