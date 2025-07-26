"use strict";

let output = document.getElementById("output673");
const button = document.getElementById("button673");

button.addEventListener("click", () => {
    let currentDate = new Date();
    let lastMonthNumber = (new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)).getDate();
    for (let i = 1; i <= lastMonthNumber; i++) {
        let optionElement = document.createElement("option");
        optionElement.value = i;
        optionElement.textContent = i;
        output.appendChild(optionElement);
    }
})

