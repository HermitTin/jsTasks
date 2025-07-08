"use strict";

// Дан объект с ключами и значениями. 
// Запишите в первый массив ключи объекта, а во второй - значения.

let obj = {
    property1: 'value1',
    property2: 'value2',
    property3: 'value3',
}
let arrProps = [];
let arrValues = [];

for (let prop in obj) {
    arrProps.push(prop);
    arrValues.push(obj[prop]);
}

console.log(arrProps, arrValues);


//or

let arrPropsSecond = [];
let arrValuesSecond = [];

arrPropsSecond = Object.keys(obj);
arrValuesSecond = Object.values(obj);

console.log(arrPropsSecond, arrValuesSecond);

