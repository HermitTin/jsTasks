"use strict";

//Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:
// {
// 	next: 'пн',
// 	curr: 'вс',
// 	prev: 'сб',
// }

function weekDays(date) {
    let daysAbbreviation = ['sat', 'sun', 'mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
    let currentDay = date.getDay() + 1;
    let days = {};
    days.next = daysAbbreviation[currentDay + 1]
    days.curr = daysAbbreviation[currentDay]
    days.prev = daysAbbreviation[currentDay - 1]
    return days;
}

console.log(weekDays(new Date()))