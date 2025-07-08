"use strict";

//Сделайте функцию, которая будет возвращать сколько дней прошло или осталось 
// до заданной даты в году, в зависимости от того, была уже эта дата или нет.

function daysUntilDate(date) {
    let difference = date.getTime() - new Date().getTime();
    if (difference > 0) {
        console.log(`Days until the date left ${difference/86400000}`)
    } else {
        console.log(`Days past ${-difference/86400000}`)
    }
}

console.log(daysUntilDate(new Date(2025, 4, 3)));