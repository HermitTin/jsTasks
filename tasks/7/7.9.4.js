"use strict";

const output = document.getElementById("output794");
const input = document.getElementById("input794");
let arr = [];

let hlyncs = input.children;
for (let item of hlyncs) {
	let obj = {};
	obj.text = item.textContent;
	obj.href = item.getAttribute("href");
	arr.push(obj);
}

output.textContent += "[\n";
for (let element of arr) {
	output.textContent += "\t{\n";
	for (let prop in element) {
		output.textContent += "\t\t" + prop + ": " + element[prop] + ",\n"
	}
	output.textContent += "\t},\n";
}
output.textContent += "]";
