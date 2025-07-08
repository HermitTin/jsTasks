"use strict";

// Через запятую написаны числа. Получите максимальное из этих чисел.

let str = "1,2,3,4,5,6";

let max = str.split(",").reduce((acc, value) => {
    if (acc < value) {
        acc = value;
    }
	return acc;
}, 0);

console.log(max);

//or 

let max2 = str.split(",").sort((a, b) => {
	return b - a;
})[0];
console.log(max2);