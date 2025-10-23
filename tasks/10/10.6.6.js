"use strict";

const output = document.getElementById("output1066");
const input = document.getElementById("input1066");

input.addEventListener("focusout", () => {
	let srcString = input.value;
	let counter = 0;
	let isCorrect = true;
	srcString.split("").forEach((char) => {
		if (char === "(") {
			counter++;
		}
		if (char === ")") {
			counter--;
		}
		if (counter < 0) {
			isCorrect = false;
		}
	});
	if (counter > 0) {
		isCorrect = false;
	}

	if (isCorrect) {
		output.textContent = "The brackets are paired correctly";
	} else {
		output.textContent = "Incorect brackets syntax";
	}
})