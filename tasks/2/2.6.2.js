"use strict";

// Дан массив с некоторыми числами, например, вот такой:
// [123, 456, 789]
// Напишите код, который перевернет числа в этом массиве по следующему принципу:
// [321, 654, 987]

let arr = [123, 456, 789];
arr = arr.map((element) => {
    element = String(element).split("").reverse().join("");
    return element;
});
console.log(arr);