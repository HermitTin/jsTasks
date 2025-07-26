"use strict";

const button = document.getElementById("button611")
let output = document.getElementById("output611");
const numbers = [1, 2, 3, 4, 5, 6];

button.addEventListener("click", () => {
    for (let number of numbers) {
        let listElement = document.createElement("li");
        listElement.textContent = number;
        output.appendChild(listElement);
    }
})