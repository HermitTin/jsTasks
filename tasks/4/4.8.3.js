"use strict";

//Сделайте функцию, которая параметром будет принимать массив и 
// возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подряд.

function randomArrayElem(arr) {
    let index = Math.trunc(Math.random() * (arr.length - 1))
    if (index != lastIndex) {
        lastIndex = index;
    } else {
        return randomArrayElem(arr);
    }
    return arr[index];
}

let lastIndex;
let arr = [1, 2, 3, 4, 5];
console.log(randomArrayElem(arr));
console.log(randomArrayElem(arr));
console.log(randomArrayElem(arr));
console.log(randomArrayElem(arr));
console.log(randomArrayElem(arr));