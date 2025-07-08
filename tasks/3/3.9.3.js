"use strict";

// Дан массив со числами. Удалите из него числа, имеющие два и более нуля.

let arr = [123, 4005, 321000, 12, 410, 67];

arr = arr.reduce((acc, value) => {
    let indexZero = String(value).indexOf("0");
    if (indexZero != -1) {
        if (String(value).indexOf("0", indexZero + 1) === -1) {
            acc.push(+value);
        }
    } else {
        acc.push(+value);
    }
	return acc;
}, []);

console.log(arr);