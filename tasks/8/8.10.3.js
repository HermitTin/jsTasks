"use strict";

const output = document.getElementById("output8103");
const input = document.getElementById("input8103");

let arr = [
	[1, 2, 3, 4, 5],
	[1, 2, 3],
	[1, 2],
];

let maxLength = 0;
for (let item of arr) {
    if (item.length > maxLength) {
        maxLength = item.length;
    }
}

for (let item of arr) {
    for (let i = 0; i < maxLength; i++) {
        if (!item[i]) {
            item.push(" ");
        }
    }
}

output.textContent = "{\n";
for (let item of arr) {
    output.textContent += "\t[" + item + "]\n";
}
output.textContent += "}\n";