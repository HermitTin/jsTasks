"use strict";

// Дана строка. Удалите из нее все гласные буквы.

let str = "Amet adipiscing aliquam, augue auctor adipiscing arcu aliquet. Accumsan augue ac adipiscing augue auctor amet aliquam ante arcu? Lorem ipsum dolor sit amet consectetur adipiscing elit! Sed auctor arcu accumsan arcu aliquam ac non aliquet auctor elit. Aenean augue arcu ante auctor adipiscing aliquet."
let vowels = ["a", "e", "y", "u", "o", "i", "A", "E", "Y", "U", "O", "I"];

str = str.split("").reduce((acc, value) => {
    if (!vowels.includes(value)) {
        acc += value;
    }
    return acc;
}, "");

console.log(str);