"use strict";

//Сделайте функцию, которая параметром будет принимать массив с числами
//  и заменять каждое число на массив его делителей.

function numberDividers(arr) {
    arr = arr.reduce((acc, value, index) => {
        acc.push([])
        for(let i = 1; i <= value; i++) {
            if (value % i === 0) {
                acc[index].push(i);
            }
        }
        return acc;
    }, [])
    return arr;
}

let arr = [12, 15, 25, 35, 45];
console.log(numberDividers(arr))