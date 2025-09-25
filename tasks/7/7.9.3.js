"use strict";

const output = document.getElementById("output793");

let arr = [];

for (let i = 1; i < 10; i = i + 2) {
	arr.push(String(i % 10) + ((i + 1) % 10));
}

for (let item of arr) {
	output.textContent += item + "\n";
}