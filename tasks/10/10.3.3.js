"use strict";

const output = document.getElementById("output1033");
const input = document.getElementById("input1033");

input.addEventListener("focusout", () => {
    output.innerHTML = "";
    let numberArray = input.value.split("").map((number) => {
        number = +number;
        return number;
    })
    for (let i = 0; i <= (numberArray.length / 2); i++) {
        for (let j = i + 1; j < numberArray.length; j++) {
            for (let k = j + 1; k < numberArray.length; k++) {
                let sum1 = 0;
                let sum2 = 0;
                let numberChecked1 = "";
                let numberChecked2 = ""
                for (let digit of numberArray) {
                    if (digit === numberArray[i] || digit === numberArray[j] || digit === numberArray[k]) {
                        sum1 += digit;
                        numberChecked1 += digit;
                    } else {
                        sum2 += digit;
                        numberChecked2 += digit;
                    }
                }
                if (sum1 === sum2) {
                    let listItem = document.createElement("ul");
                    output.appendChild(listItem);
                    listItem.textContent = "First number: " + numberChecked1 + "\nSecond number: " + numberChecked2;
                }
            }
        }
        if (output.innerHTML === "") {
            output.textContent = "No lucky numbers found";
        }
    }
})