"use strict";

//Сделайте функцию, которая параметром будет принимать число, 
// а возвращать массив его делителей, являющихся простыми числами.

function numberSimpleDivisors(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            if (isSimple(i)) {
                arr.push(i);
            }
        }
    }
    return arr
}

function isSimple(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(numberSimpleDivisors(100));