// Dynamic Attributes
// Create a component that renders an <img> element.
// Pass dynamic src and alt attributes using an object of values.

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const img = <img src="./assets/berdiabekauri.png" alt="image" />

root.render(img);