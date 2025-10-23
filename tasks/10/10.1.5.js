"use strict";

const input1 = document.getElementById("input1015_1");
const input2 = document.getElementById("input1015_2");
const output = document.getElementById("output1015");
const button = document.getElementById("button1015");

button.addEventListener("click", () => {
    let number1 = +input1.value;
    let number2 = +input2.value;
    let multresult = number1 * number2;
    let maxLength = String(multresult).length + 1;
    let shift = maxLength - String(number1).length;
    output.textContent = " ".repeat(shift) + number1 + "\n" + "*" + "\n";
    shift = maxLength - String(number2).length;
    output.textContent += " ".repeat(shift) + number2 + "\n" + "_".repeat(maxLength) + "\n";
    String(number2).split("").reverse().forEach((digit, index) => {
        let mult = +digit * number1;
        if (index === Math.floor(String(number2).length / 2)) {
            shift = maxLength - String(mult).length - index - 1;
            output.textContent += "+" + " ".repeat(shift) + mult + "\n";
        } else {
            shift = maxLength - String(mult).length - index;
            output.textContent += " ".repeat(shift) + mult + "\n";
        }
    })
    output.textContent += "_".repeat(maxLength) + "\n" + " " + multresult;

})