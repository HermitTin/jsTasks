"use strict";

//Сделайте функцию, которая параметром будет принимать массив 
// и перемешивать элементы этого массива в случайном порядке.

function arrRandomize(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.trunc(Math.random() * (i + 1));
        [[arr[i], arr[j]] = [arr[j], arr[i]]];
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(arrRandomize(arr));