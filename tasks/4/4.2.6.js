"use strict";

//Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.

function daysToSalary(date) {
    let days = (new Date(date.getFullYear(), date.getMonth() + 1) - date.getTime()) / 86400000;
    return days;
}

console.log(daysToSalary(new Date(2024, 11, 10)));