// Dynamic HTML Tag Rendering
// Create a constant that stores the name of an HTML tag (e.g., h1, p).
// Use JSX to render the dynamic tag with content like "This is dynamic!"

import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));

root.render(App("This is dynamic"));