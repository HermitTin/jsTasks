"use strict";

const input = document.getElementById("input10102");
const button = document.getElementById("button10102");
const output = document.getElementById("output10102");
let primeNumbers = [];
let compositeNumbers = [];

button.addEventListener("click", () => {
    let limit = +input.value;
    for (let i = 2; i <= limit; i++) {
        if (compositeNumbers.includes(i)) {
            continue;
        }

        primeNumbers.push(i);
        for (let j = 2; j < limit; j++) {
            let compositeNumber = i * j;
            if (compositeNumber > limit) {
                break;
            }
            compositeNumbers.push(compositeNumber);
        }
    }
    output.textContent = primeNumbers;
})