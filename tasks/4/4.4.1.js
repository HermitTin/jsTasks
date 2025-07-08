"use strict";

//Сделайте функцию, которая параметром будет принимать число, а возвращать количество его делителей.

function dividersCount(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
            console.log(`divider is ${i}`);
        }
    }
    return count;
}

console.log(`The count is ${dividersCount(1245)}`);