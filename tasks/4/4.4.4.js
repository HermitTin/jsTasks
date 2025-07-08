"use strict";

//Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.

function isSimple(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log(i);
            return false;
        }
        return true;
    }
}

let number = 13
if (isSimple(number)) {
    console.log(`The ${number} is simple`);
} else {
    console.log(`The ${number} is not simple`);
}