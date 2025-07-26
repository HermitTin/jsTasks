"use strict";

const button = document.getElementById("button631")
let output = document.getElementById("output631");
let color;

button.addEventListener("click", () => {
    if (color === "red") {
        output.style.color = "green";
        color = "green";
    } else {
        output.style.color = "red";
        color = "red";
    }
})