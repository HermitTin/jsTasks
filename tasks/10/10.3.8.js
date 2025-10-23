"use strict";

const input = document.getElementById("input1038");
const output = document.getElementById("output1038");

input.addEventListener("focusout", () => {
    let number1 = +input.value.split(" ")[0]
    let number2 = +input.value.split(" ")[2]
    let sign = input.value.split(" ")[1]
    let result = 0;
    switch(sign) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
        case "**":
        case "^":
            result = number1 ** number2;
            break;
        default:
            result = "Wrong expresiion"
    }
    output.textContent = result;
})