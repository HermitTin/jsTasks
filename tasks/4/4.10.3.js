"use strict";

//Дан текст со словами. Запишите все слова этого текста в специальный объект. 
// Ключами в этом объекте будут буквы, а значениями - массивы слов, начинающихся на эти буквы.

let str = 'lörem ipsum dölor sit amet cönsectetur ädïpiscing elit aenean möllïs ßuscipit neque at träuriß dui cräs rhöncus'
let obj = str.split(" ").reduce((acc, value) => {
    if ( !(value[0] in acc) ) {
        acc[value[0]] = [];
    };

    acc[value[0]].push(value);
    return acc;
}, {})

console.log(obj);