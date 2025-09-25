"use strict";

const output = document.getElementById("output7101");
const srcStr = "xxx";
let str = "-";

let i = 0;
do {
	if (str.length < 8) {
		i++;
	} else {
		i--;
		if (i < 1) {
			break;
		}
	}
	str += srcStr.slice(0, i) + "-";
} while(true);

output.textContent = str;