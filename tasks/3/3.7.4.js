"use strict";

// Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.

let num = 12345;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        console.log(`Number has another but 1 and ${num} dividers`)
		break;
    } else if (i == num - 1) {
        console.log(`Number don't has another but 1 and ${num} dividers`)
    }
}

