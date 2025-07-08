"use strict";

// Дан массив со числами. Проверьте, что все числа из этого массива содержат в себе цифру 3.

let arr = [3, 33, 413, 5523];
let checkNum = "3";

let check = arr.reduce((acc, value) => {
    if (!String(value).includes(checkNum)) {
        acc = true;
    }
	return acc;
}, false);

if (check) {
	console.log("Not all numbers in array contains 3")
} else {
	console.log("All numbers in array contains 3")
}
