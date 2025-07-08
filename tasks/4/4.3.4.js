"use strict";

//Сделайте функцию, которая параметром будет принимать массив с числами 
// и возвращать максимальное и минимальное значение из этого массива в виде следующего объекта:
// {
// 	max: 9,
// 	min: 1,
// }

function minMax(arr) {
    let obj = {};
    obj.min = 0;
    obj.max = 0;
    arr.map((value) => {
        if (value < obj.min) {
            obj.min = value;
        }
        if (value > obj.max) {
            obj.max = value;
        }
    });
    return obj;
}

let arr = [1, 2, 3, 4, 5, -6, -7, -8, 10];
console.log(minMax(arr));