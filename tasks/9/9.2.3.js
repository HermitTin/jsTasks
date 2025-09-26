"use strict";

const input = document.getElementById("input923");
const output = document.getElementById("output923");
const button = document.getElementById("button923");

button.addEventListener("click", () => {
    let number = +input.value;
    let divisionReminder = number;
    let dividers = [];
    while (divisionReminder != 1) {
        for (let i = 2; i <= number; i++) {
            if (divisionReminder % i === 0) {
                dividers.push(i);
                divisionReminder = divisionReminder / i;
                break;
            }
        }
    }
    output.textContent = "Prime dividers of " + number + " are: " + dividers;
})

