"use strict";

const output = document.getElementById("output1044");
const input1 = document.getElementById("input1044_1");
const input2 = document.getElementById("input1044_2");
const button = document.getElementById("button1044");

button.addEventListener("click", () => {
	let number1 = +input1.value;
	let number2 = +input2.value;
	let primeMultArr1 = fractionNumberIntoPrimeFactors(number1);
	let primeMultArr2 = fractionNumberIntoPrimeFactors(number2);
	let commonMult = commonMultipliers(primeMultArr1, primeMultArr2)
	if (commonMult[0]) {
		let gCD = findGCD(commonMult);

		output.textContent = "First number: " + number1 + "\nSecond number: " + number2 + "\n\nFactorize:\n" 
		+ createMultipliersVisualization(number1, primeMultArr1) + "\n"
		+ createMultipliersVisualization(number2, primeMultArr2) + "\nCommon multipliers: ";
		commonMult.forEach((item, index) => {
			if (index < commonMult.length - 1) {
				output.textContent += item + ", "
			} else {
				output.textContent += item + "\n"
			}
		})
		output.textContent += "GCD = ";
		commonMult.forEach((item, index) => {
			if (index < commonMult.length - 1) {
				output.textContent += item + "×"
			} else if (commonMult.length === 1) {
				output.textContent += gCD;
			} else {
				output.textContent += item + " = " + gCD;
			}
		})
	} else {
		output.textContent = "The numbers don't have common divisors"
	}
})

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

function commonMultipliers(multArray1, multArray2) {
	let commonMults = [];
	for (let i = 2; i < 9; i++) {
		let counter1 = 0;
		let counter2 = 0;
		multArray1.forEach((element) => {
			if (element === i) {
				counter1++;
			}
		});
		multArray2.forEach((element) => {
			if (element === i) {
				counter2++;
			}
		});

		if (counter1 != 0 && counter2 != 0) {
			let count = Math.min(counter1, counter2);
			for (let j = 0; j < count; j++) {
				commonMults.push(i);
			}
		}
	}
	return commonMults;
}

function findGCD(commonMultArr) {
	let gCD = commonMultArr.reduce((acc, digit) => {
		if (acc === 0) {
			acc = digit;
		} else {
			acc *= digit;
		}
		return acc;
	}, 0)
	return gCD;
}