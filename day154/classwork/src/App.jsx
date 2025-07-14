import { useMemo, useState } from "react";
import factorial from "./components/Factorial";

export default function App() {
  const [num, setNum] = useState(0)
  
  const cache = useMemo(() => factorial(num), [num])

  return (
    <div>
      <p>{cache}</p>
      <input type="number" value={num} onChange={e => setNum(parseInt(e.target.value))} />
    </div>
  )
}