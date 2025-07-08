"use strict";

//Сделайте функцию, которая параметром будет принимать дату в формате год-месяц-день, 
// и определять, существует ли такая дата или нет.

function checkDate(year, month, day) {
    if (new Date(year, month, day).getMonth() != month) {
        return false;
    }
    return true;
}

if (checkDate(2025, 51, 4)) {
    console.log('The date is correct');
} else {
    console.log('The date is incorrect');
}