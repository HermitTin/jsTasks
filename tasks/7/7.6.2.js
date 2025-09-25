"use strict";

const button = document.getElementById("button762");
const output = document.getElementById("output762")

button.addEventListener("click", () => {
    let luckyNumbers = [];

    for (let i = 100000; i < 999999; i++) {
        let sum1 = 0;
        let sum2 = 0;
        let strDigit = String(i);
        strDigit.split("").map((digit, index) => {
            if (index < 3) {
                sum1 += +digit;
            } else {
                sum2 += +digit;
            }
        });

        if (sum1 === sum2) {
            luckyNumbers.push(" " + String(i));
        }

        if (sum1 - sum2 === 1 && i < 200000) {
            luckyNumbers.push(" 0" + String(i).slice(1));
        }

    }
    luckyNumbers.sort();
    output.textContent = luckyNumbers;
})