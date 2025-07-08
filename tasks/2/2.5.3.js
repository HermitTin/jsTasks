"use strict";

// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// Поделите сумму элементов, стоящих на четных позициях, 
// на сумму элементов, стоящих на нечетных позициях.

let arr = [1, 2, 3, 4, 5, 6];

let sumEven = 0;
let sumOdd = 0;

for (let i = 1; i < arr.length; i++) { //i = 1 cause 0 is neither even nor odd
    if (i % 2 === 0) {
        sumEven += arr[i];
    } else {
        sumOdd += arr[i];
    }
}

console.log(sumEven / sumOdd);

//or

sumEven = 0;
sumOdd = 0;

arr.forEach((value, index) => {
    if (index === 0) return;
    if (index % 2 === 0) {
        sumEven += value;
        return sumEven;
    } else 
    sumOdd += value;
    return sumOdd;
});

console.log(sumEven / sumOdd);
