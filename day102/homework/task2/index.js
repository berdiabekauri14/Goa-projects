// Conditional Rendering
// Create a variable that holds a boolean value.
// Use conditional rendering to display either a "Welcome" message or a "Please log in" message based on the variable.

import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"));
const isTrue = true;

const message = <h1>{isTrue ? "Welcome" : "Please log in"}</h1>;

root.render(message);