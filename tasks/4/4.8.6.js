"use strict";

//Сделайте функцию, которая заполнит массив N случайными числами из 
// заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел.

function arrRandomFill(botLimit, topLimit, amount) {
    let arr = [];
    while (arr.length != amount) {
        let numb = Math.trunc(botLimit + Math.random() * (topLimit - botLimit + 1));
        if (arr.length != 0 && numb === arr[arr.length - 1]) {
            continue;
        } else {
            arr.push(numb);
        }
    }
    return arr;
}

console.log(arrRandomFill(1, 10, 20));