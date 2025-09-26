"use strict";

const output = document.getElementById("output961");

for (let i = 0; i < 8; i++) {
	let row = document.createElement("tr");
	output.appendChild(row);
	for (let j = 0; j < 8; j++) {
		let cell = document.createElement("td");
		row.appendChild(cell);
		if (i % 2 != 1) {
			if (j % 2 != 1) {
				cell.style.backgroundColor = "white";
			} else {
				cell.style.backgroundColor = "black";
			}
		} else {
			if (j % 2 != 1) {
				cell.style.backgroundColor = "black";
			} else {
				cell.style.backgroundColor = "white";
			}
		}
	}
}