"use strict";

//Сделайте функцию, которая параметром будет принимать массив и 
// удалять из него одинаковые, рядом стоящие элементы.

function deleteNextDouble(arr) {
    arr = arr.reduce((acc, value, index, array) => {
        if (index = 0 || value != array[index - 1]) {
            acc.push(value);
        }
        return acc;
    }, []);
    return arr;
}

let arr = [1, 1, 2, 3, 4, 4, 4, 4, 5, 6, 6];
console.log(deleteNextDouble(arr));