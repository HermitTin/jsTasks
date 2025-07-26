"use strict";

const output = document.getElementById("output6101");
const input = document.getElementById("input6101");
const button = document.getElementById("button6101");

button.addEventListener("click", () => {
    let newText = input.value;
    if (output.children.length === 0 || output.lastElementChild.textContent.length < newText.length) {
        let newListElement = document.createElement("li");
        newListElement.textContent = newText;
        output.appendChild(newListElement);
    }
})

