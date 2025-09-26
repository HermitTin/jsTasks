"use strict";

const input = document.getElementById("input954");
const output = document.getElementById("output954");

input.addEventListener("focusout", () => {
	let number = +input.value;
	output.textContent = number + " " + correctEnding(number, 'яблоко', 'яблока', 'яблок');
})

function correctEnding(amount, variant1, variant2, variant3) {
	let strNumber = String(amount);
	if (strNumber.at(-1) === "1" && strNumber.at(-2) != "1") {
		return variant1;
	}
	if (+strNumber.at(-1) > 1 && +strNumber.at(-1) < 5 && strNumber.at(-2) != "1") {
		return variant2;
	}
	return variant3;

}