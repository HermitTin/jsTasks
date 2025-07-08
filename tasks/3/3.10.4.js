"use strict";

// Дано число. Получите массив позицией всех цифр 3 в этом числе, за исключением первой и последней.

let numb = 123356325632345;
let arr = [];
arr = String(numb).split("").reduce((acc, value, index) => {
    if (value === "3") {
        acc.push(index);
    }
    return acc;
}, []);
arr.pop();
arr.shift();

console.log(arr);