"use strict";

let button = document.getElementById("button654")

button.addEventListener("click", () => {
    let inputs = document.getElementsByClassName("input654");
    let sum = 0;
    for (let inputElement of inputs) {
        sum += +inputElement.value;
    }
    button.textContent = sum;
});
