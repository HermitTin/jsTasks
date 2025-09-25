"use strict";

const button = document.getElementById("button7104");
const output = document.getElementById("output7104").children[0];

button.addEventListener("click", () => {

	let row = (output.children.length - 1) / 2;
	let column = (output.children[row].children.length - 1) / 2;
	let centralCell = output.children[row].children[column];
	centralCell.style.backgroundColor = "red";
})