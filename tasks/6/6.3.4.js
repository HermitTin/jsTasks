"use strict";

const button = document.getElementById("button634")
let output = document.getElementById("output634");

button.addEventListener("click", () => {
    setInterval(timeIncrease, 1000)
});

function timeIncrease() {
    let currentNumber = +output.textContent;
    output.textContent = currentNumber + 1;
}