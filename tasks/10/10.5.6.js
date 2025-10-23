"use strict";

const output = document.getElementById("output1055");
const button = document.getElementById("button1055");
const tData = output.children[0];

button.addEventListener("click", () => {
	let mod = 5;
	for (let row of tData.children) {
		for (let cell of row.children) {
			cell.textContent = cell.cellIndex + mod;
		}
		mod--;
	}
})