"use strict";

//Сделайте функцию, которая параметром будет принимать число, 
// а возвращать массив его делителей.

function dividersArr(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i);
            console.log(`divider is ${i}`);
        }
    }
    return arr;
}

console.log(`The dividers are ${dividersArr(1245)}`);