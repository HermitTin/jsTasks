"use strict";

// Дан некоторый массив с числами, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Слейте пары элементов вместе:
// [12, 34, 56]

let arr = [1, 2, 3, 4, 5, 6];


arr = arr.reduce((acc, item, index) => {
    if (index % 2 == 0) {
        acc.push(String(item));
    } else {
        acc[acc.length - 1] += item;
    }
    return acc;
}, []);

console.log(arr);


