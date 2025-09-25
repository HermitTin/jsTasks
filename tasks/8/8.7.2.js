"use strict";

const output = document.getElementById("output872");
const input = document.getElementById("input872");
const button = document.getElementById("button872");

button.addEventListener("click", () => {
    output.innerHTML = "";
    let number = +input.value;
    let numbersArr = [];
    for (let i = 1; i <= Math.ceil(number / 2); i++) {
        if (number % i === 0) {
            if (!numbersArr.includes(`${number / i}, ${i}`)) {
                numbersArr.push(`${i}, ${number / i}`);
                let listItem = document.createElement("li");
                listItem.textContent = String(i)+ ", " + number / i;
                output.appendChild(listItem);
            }
        }
    }
})

