"use strict";

const output = document.getElementById("output965");
const srcArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (let i = 0; i < srcArr.length; i++) {
	if (output.children.length === 0 || output.lastChild.children.length % 5 === 0) {
		let row = document.createElement("tr");
		output.appendChild(row);
	}
	let cell = document.createElement("td");
	cell.textContent = srcArr[i];
	output.children[output.children.length - 1].appendChild(cell);
}