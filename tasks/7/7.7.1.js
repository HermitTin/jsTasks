"use strict";

const input = document.getElementById("input771");
const output = document.getElementById("output771");

const arr = [1, 32, 133, 42, 5, 893, 3];
input.textContent += arr;
let counter = 0;
for (let number of arr) {
	String(number).split("").map((digit) => {
		if (digit === "3") {
			counter++
		}
	})
}
output.textContent += counter;