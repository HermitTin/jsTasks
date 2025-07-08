"use strict";

// Дана строка в формате:
// 'kebab-case'
// Преобразуйте ее в формат:
// 'snake_case'

let str = 'lorem-ipsum';

str = str.split("-").join("_");
console.log(str);