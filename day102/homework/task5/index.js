// Rendering JSX from a Function
// Define a function that returns a JSX element.
// Call this function inside the render method of your parent component.

import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));

root.render(App);