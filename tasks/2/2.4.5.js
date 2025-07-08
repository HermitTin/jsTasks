"use strict";

// Дана некоторая строка со словами:
// 'aaa bbb ccc'
// Сделайте заглавным первый символ каждого слова в этой строке. 
// В нашем случае должно получится следующее:
// 'Aaa Bbb Ccc'

let str = 'aaa bbb ccc';
let result = "";
//same for forEach
for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
        result += str[i].toUpperCase();
    } else {
        result += str[i];
    }
}
console.log(result);

//or

str = 'aaa bbb ccc';
str = str.split('').map((value, index, array) => {
    if (index === 0 || array[index - 1] === " ") {
        return value.toUpperCase()
    }
    return value;
}).join("");
console.log(str);

//or

str = 'aaa bbb ccc';
str = str.split(" ").map((value) => {
    value = value[0].toUpperCase() + value.slice(1);
    return value;
}).join(" ");
console.log(str);