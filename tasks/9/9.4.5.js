"use strict";

const button = document.getElementById("button945");
const output = document.getElementById("output945");
let counter = 0;

button.addEventListener("click", () => {
	let tbody = output.children[0];
	
	while (counter < 9) {
		let targetCell = tbody.children[randomNumber(0, 3)].children[randomNumber(0, 3)];
		if (targetCell.style.backgroundColor === "red") {
			continue;
		} else {
			targetCell.style.backgroundColor = "red";
			counter++
			break;
		}
	}

})

function randomNumber(min, max) {
	let number = min + Math.trunc(Math.random() * max);
	return number;
}