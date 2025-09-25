"use strict";

const button = document.getElementById("button721")
const output = document.getElementById("output721");
const input = document.getElementById("input721");


button.addEventListener("click", () => {
    let number = input.value;
    let liElements = output.getElementsByTagName("LI");
    for (let item of liElements) {
        if (number === item.textContent) {
            item.style.color = "red";
        }
    }
});