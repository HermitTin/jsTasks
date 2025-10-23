"use strict";

const input = document.getElementById("input1076");
input.innerHTML = "\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\tUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\tDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\tExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

input.addEventListener("keydown", (event) => {
	if (event.key === "Tab" && event.shiftKey) {
		event.preventDefault();
		let selectedText = window.getSelection().toString();
		selectedText = selectedText.split(".").map((sentence, index) => {
			if (sentence[0] === "\t") {
				if (index === 0) {
					sentence = sentence.slice(1);
				} else {
					sentence = " " + sentence.slice(1);
				}
			}
			return sentence;
			}).join(".")
		input.value = selectedText + input.value.slice(input.selectionEnd);
	}
})

