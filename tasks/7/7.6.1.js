"use strict";

const button = document.getElementById("button761");
const output = document.getElementById("output761");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

button.addEventListener("click", () => {
	let coordFirst = div1.getBoundingClientRect();
	let coordSecond = div2.getBoundingClientRect();
	if ((coordFirst["x"] >= coordSecond["x"]) && (coordFirst["x"] <= (coordSecond["x"] + coordSecond["width"])) ||
(coordSecond["x"] >= coordFirst["x"]) && (coordSecond["x"] <= (coordFirst["x"] + coordFirst["width"]))) {
		if ((coordFirst["y"] >= coordSecond["y"]) && (coordFirst["y"] <= (coordSecond["y"] + coordSecond["height"])) ||
(coordSecond["y"] >= coordFirst["y"]) && (coordSecond["y"] <= (coordFirst["y"] + coordFirst["height"]))) {
			output.textContent = "The squares overlap";
		} else {
			output.textContent = "The squares not overlap";
		}
	} else {
		output.textContent = "The squares not overlap";
	}
})