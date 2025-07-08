"use strict";

//Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет.

function leapYears(date) {
    let years = [];
    for (let i = date.getFullYear() - 100; i <= date.getFullYear(); i++) {
        if (i % 4 === 0) {
            years.push(i);
        }
    }
    return years;
}

console.log(leapYears(new Date()))