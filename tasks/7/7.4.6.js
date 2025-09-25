"use strict";

const output = document.getElementById("output746");

let arr = [];
for (let i = 0; i < 5; i++) {
	let subArr = [];
	let subArrLimit = i;
	if (i > 2) {
		subArrLimit = i + 1;
	}
	for (let j = 0; j <= subArrLimit; j++) {
		subArr.push(j + 1);
	}
	arr.push(subArr);
}

for (let item of arr) {
	output.textContent += "[" + item + "]\n";
}
