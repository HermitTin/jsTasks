"use strict";

//Сделайте функцию, которая параметром будет принимать букву и 
// проверять, это буква кириллицы или латиницы.

function defineAlphabet(str) {
    console.log(unicode);
    if ((unicode > 64 && unicode < 91) || (unicode > 97 && unicode < 123)) {
        return "latin";
    } else if (unicode > 1039 && unicode < 1104) {
        return "cyrillic";
    } else {
        return "wrong symbol";
    }
}

console.log(defineAlphabet("A"))
console.log(defineAlphabet("z"))
console.log(defineAlphabet("А"))
console.log(defineAlphabet("я"))
console.log(defineAlphabet("."))