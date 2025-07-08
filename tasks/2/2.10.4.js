"use strict";

// Дан массив с числами:
// [1, 2, 3, 3, 4, 5]
// Проверьте, что в этом массиве есть два одинаковых элемента подряд.

let arr = [1, 2, 3, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
        console.log(`${i} and ${i + 1} elements of array are equal`);
    }
}