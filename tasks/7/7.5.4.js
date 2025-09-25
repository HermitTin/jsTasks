"use strict";

const output = document.getElementById("output754");
let arr = [];

for (let i = 0; i < 5; i++) {
    let subArr = [];
    for (let j = 5 - i; j > 0; j--) {
        subArr.push("x");
    }
    arr.push(subArr);
}

for (let item of arr) {
	output.textContent += "[" + item + "]\n";
}
