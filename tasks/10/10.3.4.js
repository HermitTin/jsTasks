"use strict";

const output = document.getElementById("output1034");
const button = document.getElementById("button1034");

button.addEventListener("click", () => {
    let tdata = output.children[0];
	let rowsCount = tdata.children.length;
	let cellsCount = tdata.children[0].children.length;
	let centralCell = [Math.trunc(rowsCount / 2), Math.trunc(cellsCount / 2)];
	for (let i = 0; i < rowsCount; i++) {
		for (let j = 0; j < cellsCount; j++) {
			let distanceX = Math.abs(j - centralCell[1]);
			let distanceY = Math.abs(i - centralCell[0]);
			if (distanceX === distanceY) {
				if ((j > centralCell[1] && i < centralCell[0]) || (j < centralCell[1] && i > centralCell[0])) {
					tdata.children[i].children[j].style.backgroundColor = "green";
				} else {
					tdata.children[i].children[j].style.backgroundColor = "red";
				}
				
			}
		}	
	}
})