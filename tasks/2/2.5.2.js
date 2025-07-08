"use strict";

// Дана некоторая строка:
// 'abcdefg'
// Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:
// 'abdeg'

let str = 'abcdefg';
let result = '';

for (let i = 0; i < str.length; i++) {
    if ((i + 1) % 3 == 0) {
        continue;
    }
    result += str[i];
}

console.log(result);

//or 

result = '';
result = str.split('').map((value, index, array) => {
    if (index % 3 === 0) {
        array.splice(index, 1);
    }
    return value;
}).join('');
console.log(result);

