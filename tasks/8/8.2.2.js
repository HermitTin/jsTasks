"use strict";

const button = document.getElementById("button812")
const output = document.getElementById("output812");

button.addEventListener("click", () => {
    let listItems = [...output.children];
    listItems.sort((a, b) => {
        return a.textContent - b.textContent;
    });
    for (let item of listItems) {
        output.appendChild(item);
    }
})

