// Rendering a List
// Render a list of strings stored in a constant array using .map() inside JSX.
// Example: Render an unordered list (<ul>) of items like ["Apple", "Banana", "Cherry"].

import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById("root"));
const fruits = ["Apple", "Banana", "Cherry"];

const list = fruits.map((fruit, i) => {
    <li key={"fruit_" + i}>{fruit}</li>
});

root.render(<ul>list</ul>);