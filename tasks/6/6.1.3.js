"use strict";

const button = document.getElementById("button613")
let output = document.getElementById("output613");

button.addEventListener("click", () => {
    let listElement = document.createElement("li");
    listElement.textContent = "!";
    output.appendChild(listElement);
})