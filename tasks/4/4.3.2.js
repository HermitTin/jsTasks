"use strict";

//Сделайте функцию, которая параметром будет принимать массив 
// и удалять из него все дубли, которые встречаются больше трех раз.

function removeFourthCopy(arr) {
    arr = arr.reduce((acc, value) => {
        if (copyCounter(acc, value) < 3) {
            acc.push(value);
        }
        return acc;
    }, []);
    return arr;
}

function copyCounter(arr, value) {
    let count = 0;
    let currentPosition = 0;
    for (let i = 0; i < arr.length; i++) {
        currentPosition = arr.indexOf(value, i);

        if (currentPosition != -1) {
            count++;
            i = currentPosition;
        } else {
            break;
        }
    }
    return count;
}

let arr = [1, 1, 1, 1, 2, 3, 3, 3, 4, 4, 4, 4, 4];
console.log(removeFourthCopy(arr));