// Inline Styles
// Create a style object and use it to apply inline styles to a <div> dynamically.
// Example: Change the backgroundColor based on a value from a predefined variable.

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const myDiv = <div style={backgroundColor = red}>Hello</div>;

root.render(myDiv);