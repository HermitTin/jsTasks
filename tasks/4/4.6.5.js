"use strict";

//Сделайте функцию, которая параметром будет принимать секунды, 
// а возвращать количество дней, часов, минут и секунд, соответствующих этим секундам, 
// в виде следующего объекта:
// {
// 	d: 12,
// 	h: 10,
// 	m: 59,
// 	s: 59,
// }

function secondsToDays(seconds) {
    let obj = {};
    obj.d = Math.trunc(seconds / 86400);
    obj.h = Math.trunc(seconds % 86400 / 3600);
    obj.m = Math.trunc(seconds % 3600 / 60);
    obj.s = Math.trunc(seconds % 60);
    return obj;
}

console.log(secondsToDays(2123124))