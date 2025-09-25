"use strict";

const output = document.getElementById("output882");
const input = document.getElementById("input882");

input.addEventListener("focusout", () => {
    let number = +input.value;
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    if (sum === number) {
        output.textContent = "The number is perfect!";
    } else {
        output.textContent = "The number is not perfect";
    }
})

