"use strict";

// Дана некоторая строка. Найдите позицию третьего нуля в строке.

let str = "0wq wdq0 qwd 0 qw0 d0";
let counter = 0;
let position = -1;

do {
    position = str.indexOf("0", position + 1);
    counter++;
} while (counter < 3)

    console.log(position);