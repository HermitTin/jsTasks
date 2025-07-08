"use strict";

//Сделайте функцию, которая параметром будет принимать массив 
// и элемент и возвращать следующий за ним элемент. Смотрите пример:
// let arr = [1, 2, 3, 4, 5];
// func(arr, 1); // 2
// func(arr, 4); // 5
// func(arr, 5); // 1

function nextArrayElement(arr, elem) {
    let index = arr.indexOf(elem);
    if (index === arr.length - 1) {
        return arr[0];
    } else {
        return arr[index + 1]
    }
}

let arr = [1, 2, 3, 4, 5];
console.log(nextArrayElement(arr, 1))