"use strict";

let output = document.getElementById("output595");
const button = document.getElementById("button5106");

button.addEventListener("click", () => {
    let currentYear = new Date().getFullYear();
    for (let i = currentYear - 100; i <= currentYear + 100; i++) {
        let listElement = document.createElement("li");
        listElement.textContent = i;
        output.appendChild(listElement);
    }
})