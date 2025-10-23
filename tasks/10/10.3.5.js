"use strict";

const input = document.getElementById("input1035");
const output = document.getElementById("output1035");
const button = document.getElementById("button1035");
const upperCaseCharArr = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];
const lowerCaseCharArr = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z"
];
const specialCharsArr = [
  "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",",
  "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\",
  "]", "^", "_", "`", "{", "|", "}", "~"
];
const allCharsArr = [...upperCaseCharArr, ...lowerCaseCharArr, ...specialCharsArr];

button.addEventListener("click", () => {
    let length = +input.value;
    let conditionLowerCase = false;
    let conditionUpperCase = false;
    let conditionSpecialChar = false;
    let password = "";
    do {
        password = "";
        for (let i = 0; i < length; i++) {
            let char = allCharsArr[randomNumber(0, 84)];
            if (i === 0 || char != password.at(-1)) {
                password += char;
            }
            if (upperCaseCharArr.includes(char)) {
                conditionUpperCase = true;
            }
            if (lowerCaseCharArr.includes(char)) {
                conditionLowerCase = true;
            }
            if (specialCharsArr.includes(char)) {
                conditionSpecialChar = true;
            }
        }
    } while (!conditionLowerCase || !conditionUpperCase || !conditionSpecialChar)
    output.textContent = password;
})

function randomNumber(min, max) {
    let number = Math.trunc(min + Math.random() * (max - min));
    return number;
}