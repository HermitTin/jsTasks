"use strict";

//Сделайте функцию, которая параметром будет принимать массив чисел 
// и возвращать массив общих делителей всех чисел из переданного массива.

function commonDivisors(arr) {
    let divisors = [];
    let smallestNumb = arr.reduce((acc, value) => {
        if (value < acc) {
            acc = value;
        }
        return acc;
    });

    for (let i = 1; i <= smallestNumb; i++) {
        let isDivisor = arr.reduce((acc, value) => {
            if (value % i != 0) {
                acc = false;
            }
            return acc;
        })

        if (isDivisor) {
            divisors.push(i);
        }
    }
    return divisors;
}

let arr = [10, 20, 30];
console.log(commonDivisors(arr));

