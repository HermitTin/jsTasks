"use strict";

const output = document.getElementById("output974");

document.addEventListener("click", (event) => {
    let tdata = output.children[0];
	if (event.target.tagName === "TD") {
		let targetCell = event.target;
		let cellIndex = targetCell.cellIndex;
        for (let row of tdata.children) {
            row.children[cellIndex].remove();
        }
	}
})