"use strict";

const button = document.getElementById("button5104");
let taskOutput = document.getElementById("taskOutput5104");
let output = document.getElementById("output5104");
const numbers = [1, 2, 3, 4, 5, 6];
taskOutput.textContent = numbers;

button.addEventListener("click", () => {
    let evenNumbers = [];
    for (let number of numbers) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    }
    output.value = evenNumbers;
})