"use strict";

// Дана некоторая строка с буквами и цифрами. 
// Получите позицию первой цифры в этой строке.

let str = "qwd2sde31sd 21 s 1";

for (let i = 0; i < str.length; i++) {
    if (isFinite(str[i])) {
        console.log(i);
        break;
    }    
}

//or

console.log(str.search(/\d/));