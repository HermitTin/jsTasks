"use strict";

// Дан некоторый массив, например, вот такой:
// [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
// [1, 2]
// [3, 4]
// [5, 6]

let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i += 2) {
    console.log(`[${arr[i]}, ${arr[i+1]}]`);
}

//or 

for (let i = 0; i < arr.length; i += 2) {
    let subArr = arr.slice(i, i + 2);
    console.log(subArr);
}