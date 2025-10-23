"use strict";

const button = document.getElementById("button1085");
const output = document.getElementById("output1085");
let tableBody;
if (output.children[0].tagName === "TBODY") {
	tableBody = output.children[0];
} else {
	tableBody = output;
}

button.addEventListener("click", () => {
	let rowsCount = tableBody.children.length;
	let columnsCount = tableBody.children[0].children.length;
	for (let i = 0; i < rowsCount; i++) {
		for (let j = i; j < columnsCount; j++) {
			let cell1 = tableBody.children[i].children[j];
			let cell2 = tableBody.children[j].children[i];
			[cell1.textContent, cell2.textContent] = [cell2.textContent, cell1.textContent];
		}
	}
})