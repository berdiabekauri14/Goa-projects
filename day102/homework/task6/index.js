// Template Strings in JSX
// Use template strings to dynamically render a sentence by combining multiple variables.
// Example: const name = "John"; const age = 30; renders "John is 30 years old."

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const name = "Berdia";
const age = 11;
const p = <p>{name} is {age} years old</p>

root.render(p);