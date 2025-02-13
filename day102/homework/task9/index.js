// Rendering a Table
// Create a constant that holds an array of objects (e.g., a list of users with name and age properties).
// Render a table (<table>) where each row corresponds to an object.

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const table = (
    <table border="1">
        <tr>
            <th>Name</th>
            <td>Berdia</td>
            <td>John</td>
        </tr>
        <br />
        <tr>
            <th>Age</th>
            <td>11</td>
            <td>33</td>
        </tr>
    </table>
)

root.render(table);