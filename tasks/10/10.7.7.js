"use strict";

const output = document.getElementById("output1077");
const input = document.getElementById("input1077");

input.addEventListener("focusout", () => {
	let srcString = input.value;
	let operator = srcString.split(" ")[1];
	let leftPart = srcString.split(" ")[0].split("/");
	let rightPart = srcString.split(" ")[2].split("/");
	let operand1 = +leftPart[0] / +leftPart[1];
	let operand2 = +rightPart[0] / +rightPart[1];
	let result = 0;
	switch (operator) {
		case "+": result = operand1 + operand2;
			break;
		case "-": result = operand1 - operand2;
			break;
		case "*": result = operand1 * operand2;
			break;
		case "/": result = operand1 / operand2;
			break;
		case "**": 
		case "^": result = operand1 ** operand2;
			break;
		default: "Wrong operation"
			break;
	}
	output.textContent = result;
})