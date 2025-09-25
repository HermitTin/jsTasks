"use strict";

const output = document.getElementById("output763");

let arr = [];
let str = "xxxxx";

for (let i = 0; i < 5; i++) {
	arr.push(str.slice(0, i + 1));
}

for (let item of arr) {
	output.textContent += item + "\n";
}