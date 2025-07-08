"use strict";

//Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.

function removeDouble(arr) {
    arr = arr.reduce((acc, item) => {
        if (!acc.includes(item)) {
            acc.push(item);
        }
        return acc;
    }, []);
    return arr;
}

let arrWithDoubles = [1, 2, 3, 4, 3, 4, 2, 4, 3, 7, 3, 6, 6, 9];
console.log(removeDouble(arrWithDoubles));