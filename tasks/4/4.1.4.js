"use strict";

//Сделайте функцию, которая параметром будет принимать число и строку 
// и обрезать эту строку до длины, заданной первым параметром.

function strTrim(length, str) {
    str = str.slice(0, length);
    return str;
}

let string = "qddsqrwdq"

console.log(strTrim(4, string));