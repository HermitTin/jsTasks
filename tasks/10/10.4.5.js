"use strict";

const output = document.getElementById("output1045");
let firstPoint;
let secondPoint;

document.addEventListener("click", (event) => {
	let tdata = output.children[0];
	if (event.target.tagName === "TD") {
		if (firstPoint && firstPoint != event.target) {
			secondPoint = event.target;
			let rangeActivate = false;
			for (let row of tdata.children) {
				for (let cell of row.children) {
					if (cell === firstPoint || cell === secondPoint) {
						rangeActivate = !rangeActivate;
					}
					if (rangeActivate) {
						cell.textContent = "-";
					}
				}
			}
            secondPoint.textContent = "+";
            firstPoint.textContent = "+";
			firstPoint = undefined;
			secondPoint = undefined;	
		} else {
			cleanTable(tdata);
			firstPoint = event.target;
			firstPoint.textContent = "+";
		}
	}
})

function cleanTable(table) {
	for (let row of table.children) {
				for (let cell of row.children) {
					cell.textContent = "";
				}
			}
}