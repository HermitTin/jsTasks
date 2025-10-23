"use strict";

const output = document.getElementById("output10104");
let rows;
if (output.children[0].tagName === "TBODY") {
	rows = output.children[0].children;
} else {
	rows = output.children;
}

let rowsCount = rows.length;
let centerRow = rowsCount / 2;

let cellsCount = rows[centerRow].children.length;
let cewnterCell = cellsCount / 2;

let rowCells = rows[centerRow - 1].children;
rowCells[cewnterCell - 1].textContent = "+";
rowCells[cewnterCell].textContent = "+";

rowCells = rows[centerRow].children;
rowCells[cewnterCell - 1].textContent = "+";
rowCells[cewnterCell].textContent = "+";