"use strict";

//Сделайте функцию, которая параметром будет принимать текст со словами, 
// а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.

function wordsSort(str) {
    str = str.split(" ").sort().join(" ");
    return str;
}

let str = 'amet fdipiscing qliquam, fugue vuctor adipiscing brcu uliquet';
console.log(wordsSort(str));