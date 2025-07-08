"use strict";

//Сделайте функцию, которая будет возвращать дату следующей масленницы, 
// которая празднуется в последнее воскресенье зимы.

function daysUntilDate (date) {
    let hollidayDate = 0;

    let neededYear = date.getFullYear();;
    if (date.getMonth() > 3) {
        neededYear = date.getFullYear() + 1;
    }
    
    let febDays = 28;
    if (neededYear % 4 === 0) {
        febDays = 29;
    }

    hollidayDate = new Date(neededYear, 1, febDays - (new Date(neededYear, 1, febDays).getDay()))
    let daysLeft = (hollidayDate - date) / 86400000;
    return daysLeft;
}

console.log(daysUntilDate(new Date()));