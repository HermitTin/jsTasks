"use strict";

// Дан массив со строками. Оставьте в этом массиве только те строки, 
// которые заканчиваются на .html.

let arr = ["http://dqwqwdqw.html", "qwdcasd", " http://qweads", "http://123245.html"];
let arrFiltered = arr.filter(item => item.endsWith(".html"));

console.log(arrFiltered);

//or 

let arrSecond = ["http://dqwqwdqw.html", "qwdcasd", " http://qweads", "http://123245.html"];

for (let i = 0; i < arrSecond.length; ) {
    arrSecond[i].endsWith(".html") ? i++ : arrSecond.splice(i, 1);
}

console.log(arrSecond);
