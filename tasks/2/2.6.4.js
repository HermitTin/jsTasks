"use strict";

// Дана некоторая строка:
// 'AbCdE'
// Смените регистр букв этой строки на противоположный. 
// В нашем случае должно получится следующее:
// 'aBcDe'

let str = 'AbCdE';


for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() == str[i]) {
        str = str.slice(0, i) + str[i].toLowerCase() + str.slice(i + 1);
    } else {
        str = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
    }
}

console.log(str);
