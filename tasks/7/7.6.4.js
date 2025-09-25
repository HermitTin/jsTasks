"use strict";

const output = document.getElementById("output764");
const data = {
	2018: {
		11: {
			29: [1, 2, 3],
			30: [4, 5],
		},
		12: {
			30: [6, 7],
			31: [8, 9],
		},
	},
	2019: {
		12: {
			29: [10, 11],
			30: [12, 13],
			31: [14, 15],
		}
	},
}

function objElemMerge(obj) {
	let arr = [];
	let values = Object.values(obj);
	for (let item of values) {
		if (Array.isArray(item)) {
			arr = arr.concat(item);
		} else {
			arr = arr.concat(objElemMerge(item));
		}

	}
	return arr;
}

let arr = objElemMerge(data);
output.textContent = arr;