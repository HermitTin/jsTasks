"use strict";

// Дана некоторая строка со словами:
// 'aaa bbb ccc eee fff'
// Сделайте заглавным первый символ каждого второго слова в этой строке. 
// В нашем случае должно получится следующее:
// 'aaa Bbb ccc Eee fff'

let str = 'aaa bbb ccc eee fff';

str = str.split(" ").map((item, index, ) => {
    if (index % 2 == 1) {
        item = item[0].toUpperCase() + item.substring(1);
    }
    return item;
}).join(" ");

console.log(str);