"use strict";

//Сделайте функцию, которая параметром будет принимать массив
//  и возвращать случайный элемент этого массива.

function randomArrayElem(arr) {
    let index = Math.trunc(Math.random() * (arr.length - 1))
    return arr[index];
}

let arr = [1, 2, 3, 4, 5];
console.log(randomArrayElem(arr));
console.log(randomArrayElem(arr));
console.log(randomArrayElem(arr));
console.log(randomArrayElem(arr));
console.log(randomArrayElem(arr));