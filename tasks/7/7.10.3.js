"use strict";

const output = document.getElementById("output7103");
const input = document.getElementById("output7103");

let sum = 0;
document.addEventListener("click", (event) => {
	if (event.target.classList.contains("item")) {
		event.target.classList.toggle("active")
		if (event.target.classList.contains("active")) {
			let text = event.target.textContent;
			let price = +text[text.indexOf(":") + 2];
			sum += price;
		} else {
			let text = event.target.textContent;
			let price = +text[text.indexOf(":") + 2];
			sum -= price;
		}
	}
	output.textContent = `summary: ${sum}$`;
})

