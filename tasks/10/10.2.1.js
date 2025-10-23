"use strict";

const output = document.getElementById("output1021");
const tData = output.children[0];
clearIsBlockedState(tData);

document.addEventListener("click", (event) => {
	if (event.target.tagName === "TD") {
		if (event.target.style.backgroundColor === "red") {
			clearIsBlockedState(tData);
			event.target.style.backgroundColor = "";
			for (let row of tData.children) {
				for (let cell of row.children) {
					if (cell.style.backgroundColor === "red") {
						setBlockedState(cell, tData);
					}
				}
			}
		} else {
			if (event.target.dataset.isBlocked === "false") {
				event.target.style.backgroundColor = "red";
				setBlockedState(event.target, tData);
			}
		}		
	}
})

function setBlockedState(cell, tableContent) {
	let rowIndex = cell.parentElement.rowIndex;
	let cellIndex = cell.cellIndex;
	for (let row of tableContent.children) {
		for (let cell of row.children) {
			let currentRowIndex = cell.parentElement.rowIndex;
			let currentCellIndex = cell.cellIndex;
			if (currentRowIndex >= rowIndex - 1 && currentRowIndex <= rowIndex + 1) {
				if (currentCellIndex >= cellIndex - 1 && currentCellIndex <= cellIndex + 1) {
					cell.dataset.isBlocked = true;
				}
			}
		}
	}
}

function clearIsBlockedState(tableContent) {
	for (let row of tableContent.children) {
		for (let cell of row.children) {
			cell.dataset.isBlocked = false;
		}
	}
}