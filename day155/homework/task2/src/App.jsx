import { useState } from "react"

export default function App() {
  const listOfNames = ["Berdia", "Luka", "Nika"]

  for (let i = 0; i < listOfNames.length(); i++) {
    const [search, setSearch] = useState(Math.random(listOfNames[i]));


    const filteredNames = useMemo(() => {
      console.log("Filtering");
      return names.filter((name) =>
        name.toLowerCase().includes(search.toLowerCase())
      );
    }, [search]);
    
    return (
      <div>
        <input type="text" placeholder="Enter a name" onChange={e => setSearch(parseInt(e.target.value))} />
        <br />
        <h1>{filteredNames}</h1>
      </div>
    )
  }
}