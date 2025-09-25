"use strict";

const input = document.getElementById("input843")
const output = document.getElementById("output843");

input.addEventListener("input", () => {
    let textStart = input.value;
    for (let listItem of output.children) {
        if (listItem.textContent.startsWith(textStart)) {
            listItem.style.display = "block";
        } else {
            listItem.style.display = "none";
        }
    }
})