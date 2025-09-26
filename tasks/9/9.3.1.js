"use strict";

const input = document.getElementById("input931");
const srcText = document.getElementById("srcText931");
const output = document.getElementById("output931");
const punctuation = [".", ",", "!", "?", ";", ":"];

input.addEventListener("focusout", () => {
	let text = srcText.textContent;
	let startChar = input.value;
	let words = text.split(" ").reduce((acc, word) => {
		if (word[0].toLowerCase() === startChar) {
			if (punctuation.includes(word.at(-1))) {
				acc.push(word.slice(0, -1).toLowerCase());
			} else {
				acc.push(word.toLowerCase());
			}
		}
		return acc;
	}, []);

	if (words.length > 0) {
		let randomNumber = Math.trunc(Math.random() * words.length);
		output.textContent = words[randomNumber];
	} else {
		output.textContent = "No matches";
	}
	
})
