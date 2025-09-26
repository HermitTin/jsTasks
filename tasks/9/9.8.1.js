"use strict";

const output = document.getElementById("output981");
const button = document.getElementById("button981");

button.addEventListener("click", () => {
	let rows = output.children[0].children;
	output.children[0].insertBefore(rows[1], rows[0]);
});