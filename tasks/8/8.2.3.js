"use strict";

const input = document.getElementById("input823")
const output = document.getElementById("output823");

let arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

input.textContent = "[\n"
for (let item of arr) {
    input.textContent += "\t[" + item + "]\n"
}
input.textContent += "]\n"

for (let i = 0; i < arr.length; i++) {
    let number = ""
    for (let numbers of arr[i]) {
        number += String(numbers);
    }
    arr[i] = number;
}
output.textContent = "[" + arr + "]\n"