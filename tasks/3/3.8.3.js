"use strict";

// Дана строка в формате:
// 'snake_case'
// Преобразуйте ее в формат:
// 'camelCase'

let str = 'lorem_ipsum';

str = str.split("").reduce((acc, value, index, arr) => {
    if (value != "_") {
        if (arr[index - 1] === "_") {
            acc += value.toUpperCase();
        } else {
            acc += value;
        }
    }
	return acc;
}, "");
console.log(str);