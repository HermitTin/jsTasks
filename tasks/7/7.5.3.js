"use strict";

const output = document.getElementById("output753");
const button = document.getElementById("button753");
const input = document.getElementById("input753");
const transliteLetters = {
	"а": "a",
	"б": "b",
	"в": "v",
	"г": "g",
	"д": "d",
	"е": "ye",
	"ё": "yo",
	"ж": "g",
	"з": "z",
	"и": "i",
	"й": "y",
	"к": "k",
	"л": "l",
	"м": "m",
	"н": "n",
	"о": "o",
	"п": "p",
	"р": "r",
	"с": "s",
	"т": "t",
	"у": "y",
	"ф": "f",
	"х": "x",
	"ц": "ts",
	"ч": "c",
	"ш": "sh",
	"щ": "sch",
	"ъ": "",
	"ы": "y",
	"ь": "",
	"э": "ye",
	"ю": "yu",
	"я": "ya"
}

button.addEventListener("click", () => {
	let textArray = input.value.split("");
	let transliteratedText = "";
	for (let char of textArray) {
		let isCapital = false;
		if (char === char.toUpperCase()) {
			isCapital = true;
		}
		if (transliteLetters[char.toLowerCase()]) {
			if (isCapital) {
				transliteratedText += transliteLetters[char.toLowerCase()].toUpperCase();
			} else {
				transliteratedText += transliteLetters[char.toLowerCase()];
			}
		} else {
			transliteratedText += char;
		}
	}
	output.textContent = transliteratedText;
})