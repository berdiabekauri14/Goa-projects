// String Interpolation
// Render a greeting message using variables and string interpolation.
// Example: const greeting = "Hello"; const name = "Alice"; renders "Hello, Alice!"

import { createRoot } from "react-dom/client";

const root = document.getElementById("root");
const greeting = "Hello";
const name = "Berdia";
const p = <p>{greeting}, {name}</p>

root.render(p);