"use strict";

//Сделайте функцию, которая будет возвращать случайный цвет.

function randomColor() {
    let color = ''
    for (let i = 0; i < 6 ; i++) {
        color += Math.trunc(Math.random() * 16).toString(16);
    }
    return color.toUpperCase();
}

console.log(randomColor());