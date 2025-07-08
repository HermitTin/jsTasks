"use strict";

// Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.

let text = `Amet adipiscing aliquam, augue auctor adipiscing arcu aliquet. 
Accumsan augue ac adipiscing augue auctor amet aliquam ante arcu? 
Lorem ipsum dolor sit amet consectetur adipiscing elit! 
Sed auctor arcu accumsan arcu aliquam ac non aliquet auctor elit. 
Aenean augue arcu ante auctor adipiscing aliquet.`

let aWords = text.split(" ").reduce((acc, value) => {
    if (value[0] === 'a' || value[0] === 'A') {
        acc.push(value);
    }
    return acc;
}, []);

console.log(aWords);

//with no punctuation

const punctuation = ["!", ",", "?", "."];
aWords = "";
aWords = text.split(" ").reduce((acc, value) => {
    if (value[0] === 'a' || value[0] === 'A') {

        value = value.split("").reduce((lettersAcc, value) => {
            if (!punctuation.includes(value)) {
                lettersAcc += value;
            }
        return lettersAcc;
        }, "")
        acc.push(value);
    }
    return acc;
}, []);

console.log(aWords);