"use strict";

const button = document.getElementById("button1095");
const output = document.getElementById("output1095");
let rows;
if (output.children[0].tagName === "TBODY") {
	rows = output.children[0].children;
} else {
	rows = output.children;
}

button.addEventListener("click", () => {
	for (let row of rows) {
		for (let cell of row.children) {
			if (cell.textContent === "+") {
				wrapWithMinuses(row.rowIndex, cell.cellIndex);
			}
		}
	}
})

function wrapWithMinuses(rowIndex, cellIndex) {
	for (let i = 0; i < 3; i++) {
		let cells;
		if (rows[rowIndex - 1 + i] != undefined) {
			cells = rows[rowIndex - 1 + i].children;
		}
		for (let j = 0; j < 3; j++) {
			if (cells[cellIndex - 1 + j] != undefined) {
				if (cells[cellIndex - 1 + j].textContent != "+") {
					cells[cellIndex - 1 + j].textContent = "-";
				}
			}
		}
	}
}