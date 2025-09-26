"use strict";

const input = document.getElementById("input911");
const output = document.getElementById("output911");

let arr = input.textContent.split(". ").map((item) => {
	if (item.at(-1) === ".") {
		return item.slice(0, -1);
	}
	return item;
});
output.textContent = "[\n";
for (let item of arr) {
	output.textContent += "\t" + item + "\n";
}
output.textContent += "]";