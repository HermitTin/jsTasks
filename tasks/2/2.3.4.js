"use strict";

// Дана дата в следующем формате:
// '2025-12-31'
// Преобразуйте эту дату в следующий объект:
// {
// 	year: '2025',
// 	month: '12',
// 	day: '31',
// }

let str = '2025-12-31';
let arr = str.split("-");
let obj = {
    year: "",
    month: "", 
    day: "", 
};
let i = 0;

for (let prop in obj) {
    obj[prop] = arr[i];
    i++;
}

console.log(obj);

//or

let [year, month, day] = str.split("-");
let obj2 = {year, month, day};

console.log(obj2);
