"use strict";

const input = document.getElementById("input812");
const output = document.getElementById("output812");


let srcArr = [
	[2, 4, 5],
	[1, 2, 3],
	[0, 1, 1],
	[5, 7, 1],
]

input.textContent += "[\n";
for (let item of srcArr) {
    input.textContent += "\t[" + item + "]\n"
}
input.textContent += "]\n";


let sortedArr = srcArr.sort((a, b) => {
    let sumA = 0;
    let sumB = 0;
    for (let number of a) {
        sumA += number;
    }
    for (let number of b) {
        sumB += number;
    }
    return sumA - sumB;
})

output.textContent += "[\n";
for (let item of sortedArr) {
    output.textContent += "\t[" + item + "]\n"
}
output.textContent += "]\n";