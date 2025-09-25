"use strict";

const input1 = document.getElementById("input732_1")
const input2 = document.getElementById("input732_2")
const output = document.getElementById("output732");
const button = document.getElementById("button732");

button.addEventListener("click", () => {
    let numbers = [];
    for (let i = +input1.value; i <= +input2.value; i++) {
        let number;
        do {
            number = random(+input1.value, +    input2.value)
        } while (numbers.includes(number));
        numbers.push(number);
    }
    output.textContent = numbers;
})

function random(min, max) {
    let number = Math.trunc(min + Math.random() * (max - min + 1));
    return number;
}