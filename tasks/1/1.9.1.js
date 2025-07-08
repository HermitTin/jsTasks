"use strict";

// Дан массив со строками. Оставьте в этом массиве только те строки, 
// которые начинаются на http://.

let arr = ["http://dqwqwdqw", "qwdcasd", " http://qweads", "http://123245"];
let arrFiltered = arr.filter(item => item.startsWith("http://"));

console.log(arrFiltered);

//or 

let arrSecond = ["http://dqwqwdqw", "qwdcasd", " http://qweads", "http://123245"];

for (let i = 0; i < arrSecond.length; ) {
    arrSecond[i].startsWith("http://") ? i++ : arrSecond.splice(i, 1);
}

console.log(arrSecond);
