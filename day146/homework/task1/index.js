import { createRoot } from "react-dom/client"
import React from "react";

const container = document.getElementById("root")
const root = createRoot(container)

console.log(root);

root.render(<h1>Hello</h1>)