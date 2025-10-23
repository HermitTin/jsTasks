"use strict";

const output = document.getElementById("output1036");

let viewportWidth = window.innerWidth;
for (let element of output.children) {
	let left = element.getBoundingClientRect().left;
	let right = element.getBoundingClientRect().right;
	if (right < viewportWidth / 2) {
		element.style.backgroundColor = "green";
	} else if (left > viewportWidth / 2) {
		element.style.backgroundColor = "blue";
	} else {
		element.style.backgroundColor = "red";
	}
}
