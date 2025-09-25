"use strict";

const output = document.getElementById("output895");

let affairs = {
	'2019-12-31': ['массив дел'],
	'2018-11-29': ['массив дел'],
	'2018-11-30': ['массив дел'],
	'2018-12-27': ['массив дел'],
	'2019-12-29': ['массив дел'],
	'2019-12-30': ['массив дел'],
	'2018-12-30': ['массив дел'],
	'2018-12-31': ['массив дел'],
}

for (let item in affairs) {
	let year = item.split("-")[0];
	if (year === "2018") {
		output.textContent += item + ": [" + affairs[item] + "]\n";
	}
}