"use strict";

const button = document.getElementById("button941");
const output = document.getElementById("output941");

button.addEventListener("click", () => {
	let tbody = output.children[0];
	let columns = tbody.firstChild.children.length;
	let row = document.createElement("tr");
	tbody.appendChild(row);
	for (let i = 0; i < columns; i++) {
		let cell = document.createElement("td");
		row.appendChild(cell);
	}
})