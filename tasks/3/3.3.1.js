"use strict";

// Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.

let arr = ['wqsd', 'sqe', 'sdqsfg', 'qw', 's'];

arr = arr.reduce((acc, value) => {
    if (value.length <= 3) {
        acc.push(value);
    }
    return acc;
}, []);

console.log(arr);
