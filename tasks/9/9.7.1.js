"use strict";

document.addEventListener("click", (event) => {
	if (event.target.tagName === "TD") {
		let targetCell = event.target;
		let row = targetCell.parentElement;
		for (let item of row.children) {
			item.style.backgroundColor = "red";
		}
	}
})