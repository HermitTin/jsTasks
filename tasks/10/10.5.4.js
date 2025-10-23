"use strict";

const output = document.getElementById("output1054");
const input = document.getElementById("input1054");
const button = document.getElementById("button1054");

button.addEventListener("click", () => {
	let number = +input.value;
	let primeMultipliers = fractionNumberIntoPrimeFactors(number);
	output.textContent = createMultipliersVisualization(number, primeMultipliers);
})

function fractionNumberIntoPrimeFactors(number) {
	let factorsArray = [];
	let remainder = number;
	for (let i = 2; i <= remainder; i++) {
		if (remainder % i === 0) {
			factorsArray.push(i);
			remainder = remainder / i;
			i = 1;
		}
	}
	return factorsArray;
}

function createMultipliersVisualization(number, primeMultArr) {
	let string = number + " = ";
	primeMultArr.forEach((number, index) => {
		if (index === 0) {
			string += number;
		} else {
			string += "×" + number;
		}
	})

	return string;
}
