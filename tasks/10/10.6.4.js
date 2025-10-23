"use strict";

const output = document.getElementById("output1064");
const button = document.getElementById("button1064");
const input1 = document.getElementById("input1064_1");
const input2 = document.getElementById("input1064_2");

button.addEventListener("click", () => {
	let rangeMin = Math.min(+input1.value, +input2.value);
	let rangeMax = Math.max(+input1.value, +input2.value);
	let x1 = randomNumber(rangeMin, rangeMax);
	let x2 = randomNumber(rangeMin, rangeMax);
	let a = 0;
	while (a === 0) {
		a = randomNumber(rangeMin, rangeMax);
	}
	let b = -(x1 + x2);
	let c = x1 * x2;
	let equation = String(a) + "x² ";
	if (a * b > 0) {
		equation += "+ " + Math.abs(b*a) + "x ";
	} 
	if (a * b < 0) {
		equation += "- " + Math.abs(b*a) + "x ";
	}
	if (a * c > 0) {
		equation += "+ " + Math.abs(c*a);
	} 
	if (a * c < 0) {
		equation += "- " + Math.abs(c*a);
	}
	equation += " = 0";
	output.textContent = "x1 = " + x1 + ", x2 = " + x2 + "\n The equation: "+ equation;
})

function randomNumber(min, max) {
	let number = Math.trunc(min + Math.random() * (max - min + 1));
	return number;
}