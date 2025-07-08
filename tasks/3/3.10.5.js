"use strict";

// Дан массив со числами. Оставьте в нем числа, состоящие из разных цифр, а остальные удалите.

let arr = [1, 2353, 545, 4231, 678, 466];

arr = arr.join(",").split(",").reduce((acc, value) => {
	let isRepeating = value.split("").reduce((counter, digit) => {
		let index = value.indexOf(digit);
		if (index != -1) {
            if (String(value).indexOf(digit, index + 1) != -1) {
                counter = true;
            }
        }
        return counter;
	}, false);

	if (!isRepeating) {
      	acc.push(+value);
    }

	return acc;
}, []);

console.log(arr);