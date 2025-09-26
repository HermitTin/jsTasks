"use strict";

const input = document.getElementById("input995");
const output = document.getElementById("output995");

const startNumbers = ["нуль", "один", "два", "три", "чотири", "п'ять", "шість", "сім", "вісім", "девять", "десять", 
	"одинадцять", "дванадцять", "тринадцять", "чотирнадцять", "п'ятнадцять", "шіснадцять", 
	"сімнадцять", "вісімнадцять", "дев'ятнадцять"];
const dozens = ["", "", "двадцять", "тридцять", "сорок", "п'ятдесят", "шістдесят", "сімдесят", "вісімдесят", "дев'яносто"];
const hundreds = ["", "сто", "двісті", "триста", "чотириста", "п'ятсот", "шістсот", "сімсот", "вісімсот", "дев'ятсот"];

input.addEventListener("focusout", () => {
	let number = +input.value;
	output.textContent = convertToWords(number);
})

function convertToWords(number) {
	let result = "";
	if (number < 20) {
		result = startNumbers[number];
	}
	if (number >= 20 && number < 100) {
		if (number % 10 === 0) {
			result = dozens[Math.trunc(number / 10)]
		} else {
			result = dozens[Math.trunc(number / 10)] + " " + startNumbers[number % 10];
		}
	}
	if (number >= 100 && number < 1000) {
		if (number % 100 < 20 && number > 0) {
			result = hundreds[Math.trunc(number / 100)] + " " + startNumbers[number % 100];
		} else {
			result = hundreds[Math.trunc(number / 100)] + " " + dozens[Math.trunc((number % 100) / 10)] + " " + startNumbers[number % 10];
		}
		
	} else {
		result = "Too big number"
	}

	return result;
}