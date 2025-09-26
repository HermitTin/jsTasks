"use strict";

const input1 = document.getElementById("input924_1");
const input2 = document.getElementById("input924_2");
const output = document.getElementById("output924");
const button = document.getElementById("button924");

button.addEventListener("click", () => {
    let min = Math.min(+input1.value, +input2.value);
    let max = Math.max(+input1.value, +input2.value); 
    if (min < 2 || max < 2) {
        output.textContent = "Wrong inputs";
    }
    let primeNimbers = [];
outer: for (let i = min; i <= max; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                continue outer;
            }
        }
        primeNimbers.push(i);
    }
    output.textContent = "Prime numbers from area:";
    for (let item of primeNimbers) {
        let listItem = document.createElement("li");
        listItem.textContent = item;
        output.appendChild(listItem);
    }
})
