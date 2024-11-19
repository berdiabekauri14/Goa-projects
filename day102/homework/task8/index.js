// Nested Map Rendering
// Use .map() inside another .map() to render a nested structure.
// Example: An array of categories where each category contains an array of items.

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
const names = ["alice", "bob", "john", "luke", "nick", "isabella", "donald"];

const nesting = names.map((name, i) => {
    <div>
        <ul>
            <li key={"name_" + i}></li>
        </ul>
    </div>
}) 

root.render(nesting);