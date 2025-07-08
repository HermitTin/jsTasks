"use strict";

//Сделайте функцию, которая параметром будет принимать год и проверять, високосный он или нет.

function isLeap(date) {
    if (date.getFullYear() % 4 === 0) {
        console.log('The year is leap')
    } else {
        console.log('The year is not leap')
    }
}

isLeap(new Date(2024, 0, 1))