"use strict";

// Дана некоторая строка со словами:
// 'aaa bbb ccc eee fff'
// Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:
// 'aaa ccc fff'

let str = 'aaa bbb ccc eee fff';

str = str.split(" ").reduce((acc, value, index) => {
    if (index % 2 == 0) {
        acc.push(value);
    }
    return acc;
}, []).join(" ");

console.log(str);