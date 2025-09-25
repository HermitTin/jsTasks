"use strict";

const button = document.getElementById("button8101");
const input1 = document.getElementById("input8101_1");
const input2 = document.getElementById("input8101_2");
const output = document.getElementById("output8101");

button.addEventListener("click", () => {
    let number1 = +input1.value;
    let number2 = +input2.value;
    let dvidersSum1 = 0;
    let dvidersSum2 = 0;
    let limit = Math.round(Math.max(number1, number2) / 2)
    for (let i = 1; i <= limit; i++) {
        if (number1 % i === 0) {
            dvidersSum1 += i
        }
        if (number2 % i === 0) {
            dvidersSum2 += i
        }
    }
    if (dvidersSum1 === number2 && dvidersSum2 === number1) {
        output.textContent = "The numbers are amicable"
    } else {
        output.textContent = "The numbers are not amicable"
    }
})