"use strict";

const output = document.getElementById("output982");
const button = document.getElementById("button982");

button.addEventListener("click", () => {
	let rows = output.children[0].children;
    for (let row of rows) {
        row.insertBefore(row.children[1], row.children[0]);
    }
	
});