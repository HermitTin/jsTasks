"use strict";

const input1 = document.getElementById("input1037_1");
const input2 = document.getElementById("input1037_2");
const button = document.getElementById("button1037");
const output = document.getElementById("output1037");

button.addEventListener("click", () => {
    output.textContent = "";
    let divisible = input1.value;
    let divisibleLength = input1.value.length;
    let divisor = input2.value;
    let divisorLength = input2.value.length;
    let result = +divisible / +divisor;
    if (String(result).length > 10) {
        result = result.toFixed(10)
    }
    if (!divisible || !divisor || +divisor === 0) {
        output.textContent = "Wrong numbers";
    } else {
        let shiftDivisible = 0;
        let shiftDivider = 0;
        let limit = divisibleLength;
        let remainder = 0;
        let counter = 0;
        let divisiblePart = "";

        if (+divisible > +divisor) {
            for (let i = 0; i < limit; i++) {
                if (remainder != 0) {
                    divisiblePart += String(remainder) + divisible[i];
                    remainder = 0;
                } else {
                    divisiblePart += divisible[i];
                }
                if (+divisiblePart < +divisor) {
                    if (divisible[i + 1]) {
                        continue;
                    }
                }
                remainder = +divisiblePart % +divisor;
                shiftDivisible = i - divisiblePart.length + 1;
                shiftDivider = i - String(+divisiblePart  - remainder).length + 1;
                if (counter === 0) {
                    counter++;
                    output.textContent += divisible + "|" + divisor + "\n" 
                    + " ".repeat(shiftDivider) + (+divisiblePart - remainder) + " ".repeat(divisibleLength - divisiblePart.length) 
                    + "|" + result + "\n" + "-".repeat(divisibleLength) + "\n";
                } else {
                    output.textContent += " ".repeat(shiftDivisible) + divisiblePart + "\n" 
                    + " ".repeat(shiftDivider) + (+divisiblePart - remainder) + "\n" + "-".repeat(shiftDivisible + divisibleLength) + "\n";
                }
                
                if (i === limit - 1 && remainder != 0) {
                        limit++;
                        divisible += "0";
                    }
                divisiblePart = "";
                if (i > 10) {
                    break;
                }
            }
            output.textContent += " ".repeat(shiftDivisible) + remainder;

        } else {
            for (let i = 0; i < limit; i++) {
                if (remainder != 0) {
                    divisiblePart += String(remainder) + divisible[i];
                    remainder = 0;
                } else {
                    divisiblePart += divisible[i];
                }
                if (+divisiblePart < +divisor) {
                    if (divisible[i + 1]) {
                        continue;
                    }
                }
                remainder = +divisiblePart % +divisor;
                shiftDivisible = i - divisiblePart.length + 1;
                shiftDivider = i - divisiblePart.length + 1;
                if (counter === 0) {
                    counter++;
                    output.textContent += divisible + " ".repeat(divisorLength - divisibleLength) + "|" + divisor + "\n" 
                    + " ".repeat(shiftDivider) + divisor + "|" + result + "\n" + "-".repeat(shiftDivisible) + "\n";
                } else {
                    output.textContent += " ".repeat(shiftDivisible) + divisiblePart + "\n" 
                    + " ".repeat(shiftDivider) + divisor + "\n" + "-".repeat(shiftDivisible + divisorLength) + "\n";
                }
                
                if (i === limit - 1 && remainder != 0) {
                        limit++;
                        divisible += "0";
                    }
                divisiblePart = "";
                if (i > 10) {
                    break;
                }
            }
            output.textContent += " ".repeat(shiftDivisible) + remainder;
        }
    }
})