"use strict";

//Сделайте функцию, которая параметром будет принимать двухмерный массив чисел 
// и возвращать массив максимальных чисел в каждом подмассиве.

function maxValueInSubArrays(arr) {
    let maxValues = arr.reduce((acc, value) => {
        let bigestValue = value.reduce((acc, value) => {
            if (value > acc) {
                acc = value;
            }
            return acc;
        })
        acc.push(bigestValue);
        return acc;
    }, [])
    return maxValues;
}


let arr = [[1, 2, 3, 4], [6, 7, 8, 9, 10]];
console.log(maxValueInSubArrays(arr));