"use strict";

//Сделайте функцию, которая параметром будет принимать 
// массив с числами и возвращать второе по величине число.

function secondMaxNumber(arr) {
    let max = 0
    let secondMax = arr.reduce((acc, value) => {
        if (value > max) {
            acc = max;
            max = value;
        }
        if (value > acc && value < max){
            acc = value;
        }
        return acc;
    }, 0)
    return secondMax;
}

let arr = [1, 2, 3, 5, 6, 78, 10];
console.log(secondMaxNumber(arr));