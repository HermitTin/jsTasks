"use strict";

// Дана строка в формате:
// 'camelCase'
// Преобразуйте ее в формат:
// 'snake_case'

let str = 'loremIpsum';

str = str.split("").reduce((acc, value) => {
    if (value.toUpperCase() === value) {
        acc += `_${value.toLocaleLowerCase()}`;
    } else {
        acc += value;
    }
	return acc;
}, "");
console.log(str);