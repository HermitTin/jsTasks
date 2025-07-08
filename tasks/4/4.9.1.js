"use strict";

//Сделайте функцию, которая будет возвращать сколько дней осталось до ближайшего 29 февраля.

function daysUntilDate (date) {
    let nextLeapYear = date.getFullYear() + (4 - date.getFullYear() % 4);
    let daysLeft = (new Date(nextLeapYear, 1, 29) - date) / 86400000;
    return daysLeft;
}

console.log(daysUntilDate(new Date()));