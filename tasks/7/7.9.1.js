"use strict";

const input = document.getElementById("input791");
const output = document.getElementById("output791");

input.addEventListener("focusout", (event) => {
	let word = event.target.value;
	let wordsArray = output.textContent.split(" ");
	if (!wordsArray.includes(word)) {
		output.textContent += " " + word;
	}
})