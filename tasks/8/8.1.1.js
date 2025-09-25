"use strict";

const input = document.getElementById("input811");
const output = document.getElementById("output811");


let srcArr = [
	[1, 2, 3],
	[1, 2],
	[1, 2, 3, 4, 5],
	[1],
	[1, 2, 3, 4],
]

input.textContent += "[\n";
for (let item of srcArr) {
    input.textContent += "\t[" + item + "]\n"
}
input.textContent += "]\n";


let sortedArr = srcArr.sort((a, b) => {
    return a.length - b.length;
})

output.textContent += "[\n";
for (let item of sortedArr) {
    output.textContent += "\t[" + item + "]\n"
}
output.textContent += "]\n";