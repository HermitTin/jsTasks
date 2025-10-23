"use strict";

const input = document.getElementById("input1065");

input.addEventListener("keydown", (event) => {
	if (event.key === "Tab") {
		event.preventDefault();
		let selectedText = window.getSelection().toString();
		selectedText = selectedText.split(".").map((sentence) => {
			sentence = "\t" + sentence;
			return sentence;
			}).join(".")
		input.value = selectedText + input.value.slice(input.selectionEnd);
	}
})

