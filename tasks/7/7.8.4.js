"use strict";

const output = document.getElementById("output784");
let arr = []
const srcStr = "12345"

let i = 0;
do {
	if (arr.length < 5) {
		i++
		arr.push(srcStr.slice(0, i));
	} else {
		i--
		if (i == 0) {
			break;
		}
		arr.push(srcStr.slice(0, i));
	}
} while (true);

for (let item of arr) {
	output.textContent += item + "\n";
}