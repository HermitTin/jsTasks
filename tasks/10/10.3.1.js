"use strict";

const input = document.getElementById("input1031");
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

input.addEventListener("input", () => {
	let text = input.value;
	if (!digits.includes(text.at(-1))) {
		input.value = text.slice(0, -1);
	}
})
