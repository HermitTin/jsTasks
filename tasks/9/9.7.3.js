"use strict";

document.addEventListener("click", (event) => {
	if (event.target.tagName === "TD") {
		let targetCell = event.target;
		let row = targetCell.parentElement;
		row.remove();
	}
})