"use strict";

const input1 = document.getElementById("input922_1");
const input2 = document.getElementById("input922_2");
const button = document.getElementById("button922");
const output = document.getElementById("output922");

button.addEventListener("click", () => {
    let number1 = +input1.value;
    let number2 = +input2.value;
    let fractionNumber = String(number1 / number2).slice(2);
    let prePeriod = "";
    let period = "";

    for (let k = 1; k < 9; k++) {
        let searchPartLength = k;
        if (period != "") {
            break
        }
        prePeriod = "";
        for (let i = 0; i < 16; i++) {
            if (period != "") {
                break;
            }
            let searchPart = fractionNumber.slice(i, i + searchPartLength);
            let comparePart = fractionNumber.slice(i + searchPartLength, i + searchPartLength * 2);
            if (searchPart === comparePart) {
                period = searchPart;
                for (let j = i + searchPartLength; j < 16; j += searchPartLength) {
                    comparePart = fractionNumber.slice(j, j + searchPartLength);
                    if (j + searchPartLength > 16) {
                        break;
                    }
                    if (searchPart != comparePart) {
                        period = "";
                        break;
                    }
                }
            } else {
                prePeriod += fractionNumber[i];
            }
        }
    }
    output.textContent = "The fraction is: " + (number1 / number2) + "\nThe period is: " + period + 
    "\nPre period: " + prePeriod; 
})