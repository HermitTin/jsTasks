"use strict";

const button = document.getElementById("button612")
let output = document.getElementById("output612");

button.addEventListener("click", () => {
    for (let i = 1; i <= 10; i++) {
        let listElement = document.createElement("li");
        listElement.textContent = i;
        output.appendChild(listElement);
    }
})