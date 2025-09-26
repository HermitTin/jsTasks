"use strict";

const output = document.getElementById("output984");
let currentNumber = 1;

document.addEventListener("click", (event) => {
    if (event.target.tagName === "TD") {
        event.target.textContent = currentNumber;
		currentNumber++;
		if (currentNumber > 3) {
			currentNumber = 1;
		}
    }
})