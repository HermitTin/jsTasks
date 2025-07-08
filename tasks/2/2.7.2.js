"use strict";

// Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.

let char = prompt("Enter a character", "a");

if (char[0].toUpperCase() === char[0]) {
    console.log("Uppercase character entered");
} else {
    console.log("Lowercase character entered");
}