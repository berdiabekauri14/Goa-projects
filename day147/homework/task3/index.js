import React from 'react';
import { createRoot } from 'react-dom/client'

const div = document.getElementById('root');
const root = createRoot(div);

root.React.createElement("div", {className: "div"}, React.createElement("button", {id: "btn"}, "hello"));