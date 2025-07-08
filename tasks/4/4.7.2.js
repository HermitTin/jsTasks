"use strict";

//Сделайте функцию, которая параметром будет принимать два массива 
// и возвращать массив их общих элементов.

function commonArrayElements(arr1, arr2) {
    let commonArr = arr1.reduce((acc, value) => {
        if (arr2.includes(value) && !acc.includes(value)) {
            acc.push(value);
        }
        return acc;
    }, []);
    return commonArr;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 2, 4, 5, 6, 7, 8];
console.log(commonArrayElements(arr1, arr2));