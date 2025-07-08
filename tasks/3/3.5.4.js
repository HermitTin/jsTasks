"use strict";

// Дан массив со числами. Проверьте, что в нем есть число, содержащее в себе цифру 3.

let arr = [1, 0, 3, 20, 103, 3201, 124];

arr = arr.reduce((acc, value) => {
    if (String(value).includes("3")) {
        acc.push(value);
    }
    return acc;
}, []);

console.log(arr);