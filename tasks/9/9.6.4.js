"use strict";

const output = document.getElementById("output964");

document.addEventListener("change", (event) => {
	if (event.target.tagName === "INPUT") {
		let inputs = output.children;
		let counter = 0;
		for (let item of inputs) {
			if (item.checked) {
				counter++;
			}
		}
		if (counter >= 3) {
			for (let item of inputs) {
				if (!item.checked) {
					item.disabled = true;
				}
			}
		} else {
			for (let item of inputs) {
				item.disabled = false;
			}
		}
	}
})