"use strict";

// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Поменяйте местами пары элементов этого массива:
// [2, 1, 4, 3, 6, 5]

let arr = [1, 2, 3, 4, 5, 6];

arr = arr.reduce((acc, value, index, array) => {
    if (index % 2 == 0) {
        acc.push(array[index + 1]);
        acc.push(value);
    }
    return acc;
}, []);

console.log(arr);