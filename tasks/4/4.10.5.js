"use strict";

//Сделайте функцию, которая параметром будет принимать слово 
// и возвращать массив его слогов.

function splitIntoSyllables(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    let syllables = [];
    let currentSyllable = '';

    for (let i = 0; i < str.length; i++) {
        currentSyllable += str[i];

        if (vowels.includes(str[i])) { //check for 2 vowels in row
            if (vowels.includes(str[i + 1])) {
                syllables.push(currentSyllable);
                currentSyllable = '';
            } else if (vowels.includes(str[i]) && i != str.lenght - 1) { //check for multiple consonants
                for (let j = i + 1; j < str.length; j++) {
                    if (vowels.includes(str[j])) {
                        let currentSyllLeftover = Math.floor( (j - i) / 2 ) - 1; //last consonant always going to next syllable
                        currentSyllable += str.substr(i + 1, currentSyllLeftover);
                        syllables.push(currentSyllable);
                        currentSyllable = '';
                        i += currentSyllLeftover;
                        break;
                    }
                }
            }
        } 

        if (i === str.length - 1) {
            syllables.push(currentSyllable);
        }
    }

    return syllables;
}

console.log(splitIntoSyllables('nikotineamid'))
