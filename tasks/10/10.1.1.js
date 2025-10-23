"use strict";

const input = document.getElementById("input1011");
const output = document.getElementById("output1011");

input.addEventListener("focusout", () => {
	let word = input.value.toLowerCase();
	if (word.at(-1) === "y") {
		output.textContent = word.slice(0, -1) + "ies";
	}
	if ((word.slice(-2, -1) === "ch")) {
		output.textContent = word.slice(0, -2) + "es";
	} else {
		output.textContent = word + "s";
	}
})