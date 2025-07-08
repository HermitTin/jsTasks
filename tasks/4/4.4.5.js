"use strict";

//Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.

function deleteEvenDigits(num) {
    num = +String(num).split('').reduce((acc, value) => {
        if (value % 2 != 0) {
            acc.push(value);
        }
        return acc;
    }, []).join('');
    return num;
}

let number = 12345;
console.log(deleteEvenDigits(number));