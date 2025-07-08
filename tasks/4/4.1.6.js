"use strict";

//Сделайте функцию, которая параметром будет принимать число, 
// а возвращать сумму его делителей.

function dividersSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            sum += i;
            console.log(`divider is ${i}`);
        }
    }
    return sum;
}

console.log(`The sum is ${dividersSum(1245)}`);