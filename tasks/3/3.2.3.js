"use strict";

// Дана некоторая переменная с числом:
// let num = 5;
// Сделайте строку, содержащую столько нулей, сколько указано в переменной. 
// В нашем случае получится такая строка:
// '00000'

let num = 5;
let str = "";

for (let i = 0; i < num; i++) {
    str += "0";
}

console.log(str);

//or

str = "";
str = String(10**num).slice(1);

console.log(str);