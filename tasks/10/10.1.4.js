"use strict";

const input = document.getElementById("input1014");
let counter = 0;

input.addEventListener("input", () => {
	let number = input.value;
	if ((number.length - counter) % 3 === 0) {
		input.value += " ";
		counter++;
	}
})