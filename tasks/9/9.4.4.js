"use strict";

const output = document.getElementById("output944");

document.addEventListener("click", (event) => {
	if (event.target.tagName === "TD") {
		let targetChar = event.target;
		let inputNode = document.createElement("input");
		targetChar.appendChild(inputNode);
		inputNode.addEventListener("focusout", () => {
			let text = inputNode.value;
			targetChar.innerHTML = "";
			targetChar.textContent = text;
		});
	}
})
