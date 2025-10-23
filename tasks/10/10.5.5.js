"use strict";

const input = document.getElementById("input1055");
const output = document.getElementById("output1055");
const data = {
	a: {
		b: {
			c: '+++'
		}
	},
}

input.addEventListener("focusout", () => {
	let inputString = input.value;
	let args = inputString.split(".");
	let targetData = args.reduce((acc, element, index) => {
		if (index === 0) {
			acc = data[element];
		} else {
			acc = acc[element];
		}
		return acc;
	}, {});
	output.textContent = targetData;
})