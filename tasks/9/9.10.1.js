"use strict";

const output = document.getElementById("output9101");
let firstPoint;
let secondPoint;

document.addEventListener("click", (event) => {
	let tdata = output.children[0];
	if (event.target.tagName === "TD") {
		if (firstPoint) {
			secondPoint = event.target;
			secondPoint.style.backgroundColor = "red";
			let rangeActivate = false;
			for (let row of tdata.children) {
				for (let cell of row.children) {
					if (cell === firstPoint || cell === secondPoint) {
						rangeActivate = !rangeActivate;
					}
					if (rangeActivate) {
						cell.style.backgroundColor = "red";
					}
				}
			}
			firstPoint = undefined;
			secondPoint = undefined;	
		} else {
			cleanTable(tdata);
			firstPoint = event.target;
			firstPoint.style.backgroundColor = "red";
		}
	}
})

function cleanTable(table) {
	for (let row of table.children) {
				for (let cell of row.children) {
					cell.style.backgroundColor = "";
				}
			}
}