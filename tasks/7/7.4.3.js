"use strict";

const output = document.getElementById("output743");
const button = document.getElementById("button743");
const input = document.getElementById("input743");

button.addEventListener("click", () => {
	let number = input.value;
	let sum1 = 0;
	let sum2 = 0;
	for (let i = 0; i < number.length; i++) {
		if (i < number.length / 2) {
			sum1 += +number[i];
		} else {
			sum2 += +number[i];
		}
	}
	if (sum1 === sum2) {
		output.textContent = "It's lucky number!";
	} else {
		output.textContent = "Not lucky";
	}
})

