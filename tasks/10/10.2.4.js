"use strict";

const input1 = document.getElementById("input1024_1");
const input2 = document.getElementById("input1024_2");
const output = document.getElementById("output1024");
const button = document.getElementById("button1024");

button.addEventListener("click", () => {
	let min = Math.min(+input1.value, +input2.value);
	let max = Math.max(+input1.value, +input2.value);
	for (let i = min; i <= max; i++) {
		let sum = 0;
		for (let j = 1; j < i; j++) {
			if (i % j === 0) {
				sum += j;
			}
		}
		if (sum > i) {
			let listItem = document.createElement("li");
			listItem.textContent = i;
			output.appendChild(listItem);
		}
	}
})