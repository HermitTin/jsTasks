"use strict";

const output = document.getElementById("output991");
let counter = 0;

document.addEventListener("click", (event) => {
    if (event.target.tagName === "TD") {
		counter++;
        event.target.textContent = counter;
    }
})