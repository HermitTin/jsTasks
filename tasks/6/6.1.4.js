"use strict";

const button = document.getElementById("button614")
let output = document.getElementById("output614");

button.addEventListener("click", () => {
    let number = output.children.length + 1;
    let listElement = document.createElement("li");
    listElement.textContent = number;
    output.appendChild(listElement);
})