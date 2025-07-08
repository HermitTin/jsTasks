"use strict";

//Сделайте функцию, которая параметром будет получать строку со словами,
//  а возвращать строку в верхнем регистре, состоящую из первых букв слов.

function firstWordLetters(str) {
    str = str.split(' ').reduce((acc, value) => {
        acc += value[0].toUpperCase();
        return acc;
    }, '')
    return str
}

let str = 'Amet fdipiscing qliquam, fugue vuctor adipiscing brcu uliquet';
console.log(firstWordLetters(str));