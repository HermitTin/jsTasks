"use strict";

// Даны два слова. Проверьте, что последняя буква первого слова 
// совпадает с первой буквой второго слова.

let str = "qwerty ytrewq";
let key = str.indexOf(" "); //find first space between words in str

if (str[key - 1] == str[key + 1]) {
    console.log("First and last letters are the same");
} else {
    console.log("First and last letters are not the same");
}
