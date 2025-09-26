"use strict";

const button = document.getElementById("button942");
const output = document.getElementById("output942");

button.addEventListener("click", () => {
	let tbody = output.children[0];
	for (let row of tbody.children) {
        let cell = document.createElement("td");
        row.appendChild(cell);
    }
	
})