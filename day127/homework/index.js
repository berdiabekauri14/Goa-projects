import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

const BookList = ["robin hood", "i see the sun", "boy at the last table"]

const func = (callback) => {
    res = []

    for (let i = 0; i < BookList.length; i++) {
        res.push(callback(BookList[i]))
    }

    root.render(
        <ul>
            {res}
        </ul>
    )
}

func(bookName => {
    <li key={bookName}>{book}</li>
})