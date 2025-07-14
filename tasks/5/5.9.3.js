"use strict";

let input = document.getElementById("input593");

input.addEventListener("input", () => {
    if (input.value % 2 === 0) {
        input.style.borderColor = "green";
    } else {
        input.style.borderColor = "red";
    }
})