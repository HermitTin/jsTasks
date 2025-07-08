"use strict";

// Дана строка. Сделайте заглавной последнюю букву каждого слова в этой строке.

let str = "Amet adipiscing aliquam, augue auctor adipiscing arcu aliquet. Accumsan augue ac."

str = str.split(" ").reduce((acc, value) => {
    acc.push(value.split("").map((letter, index, arr) => {
		if (arr[index + 1] === "," || arr[index + 1] === ".") {
			letter = letter.toUpperCase();
		}
		if (index == value.length - 1 && value != "," && value != ".") {
			letter = letter.toUpperCase();
		}
        // if (index == value.length - 1) {
		// 	if (value === "," || value === ".") {
		// 		arr[index - 1] = arr[index - 1].toUpperCase();
		// 	} else {
		// 		letter = letter.toUpperCase();
		// 	}
        // }
        return letter;
    }).join(""));
    return acc;
}, []).join(" ");

console.log(str);