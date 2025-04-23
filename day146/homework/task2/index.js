import { createRoot } from "react-dom/client"
import React from "react";


const container = document.getElementById("root")
const root = createRoot(container);

const element = (
    <div>
        <h1>Gym inventories</h1>
        <br />
        <ul>
            <li>element1</li>
            <li>element2</li>
            <li>element3</li>
        </ul>
    </div>
)

root.render(element)