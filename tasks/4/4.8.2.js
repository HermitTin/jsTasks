"use strict";

//Сделайте функцию, которая параметром будет принимать массив 
// и возвращать массив из N случайных элементов этого массива.

function randomArrayInterval(arr) {
    let start = Math.trunc(Math.random() * (arr.length - 1))
    let length = 1 + Math.trunc(Math.random() * (arr.length - 1));
    arr = arr.slice(start, start + length);
    return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(randomArrayInterval(arr));
console.log(randomArrayInterval(arr));
console.log(randomArrayInterval(arr));
console.log(randomArrayInterval(arr));
console.log(randomArrayInterval(arr));