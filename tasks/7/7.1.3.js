"use strict";

const button = document.getElementById("button713")
const output = document.getElementById("output713");

button.addEventListener("click", () => {
    let text = output.textContent;
    text = text.split("").map((char, index, array) => {
        if (array[index + 1] === "/") {
            char = "<span>" + char;
        }
        if (array[index - 1] === "/") {
            char = char + "</span>";
        }
        return char;
    }).join("");
    output.textContent = "";
    output.innerHTML = text;
})