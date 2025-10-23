"use strict";

const output = document.getElementById("output1043");
const input1 = document.getElementById("input1043_1");
const input2 = document.getElementById("input1043_2");
const button = document.getElementById("button1043");
const aboveStringNumbers = ["⁰","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹"]

button.addEventListener("click", () => {
    let number1 = +input1.value;
    let number2 = +input2.value;
    let primeMultArr1 = fractionNumberIntoPrimeFactors(number1);
    let primeMultArr2 = fractionNumberIntoPrimeFactors(number2);
    let maxPowNumbers1 = findHighestPowerNumbersInRow(primeMultArr1);
    let maxPowNumbers2 = findHighestPowerNumbersInRow(primeMultArr2);
    let maxPowNumbers = findHighestPowerNumbersFromRows(primeMultArr1, primeMultArr2);
    let lCM = findLCM(maxPowNumbers);

    output.textContent = "First number: " + number1 + "\nSecond number: " + number2 
    + "\n\nFactorize:\n" + createMultipliersVisualization(number1, primeMultArr1, maxPowNumbers1) 
    + "\n" + createMultipliersVisualization(number2, primeMultArr2, maxPowNumbers2) 
    + "\nThe highest powered numbers: " + poweredNumbersPrint(maxPowNumbers) + "\n\n" 
    + "The LCM = " + poweredNumbersPrint(maxPowNumbers) + " = ";
    maxPowNumbers.forEach((item, index) => {
        output.textContent += item[0] ** item[1];
        if (index < maxPowNumbers.length - 1) {
            output.textContent += " × ";
        }
    })
    output.textContent += " = " + lCM;

})

function createMultipliersVisualization(number, primeMultArr, maxPowNumbers) {
    let string = number + " = ";
    primeMultArr.forEach((number, index) => {
        if (index === 0) {
            string += number;
        } else {
            string += "×" + number;
        }
    })
    string += " = " + poweredNumbersPrint(maxPowNumbers);   
    
    return string;
}

function poweredNumbersPrint(powNumbersArray) {
    let string = "";
    powNumbersArray.forEach((item, index) => {
        string += item[0];
        String(item[1]).split("").forEach((digit) => {
            string += aboveStringNumbers[+digit]
        })
        if (index < powNumbersArray.length - 1) {
            string += " × "
        }
    })
    return string;
}

function fractionNumberIntoPrimeFactors(number) {
    let factorsArray = [];
    let remainder = number;
    for (let i = 2; i <= remainder; i++) {
        if (remainder % i === 0) {
            factorsArray.push(i);
            remainder = remainder / i;
            i = 1;
        }
    }
    return factorsArray;
}

function findHighestPowerNumbersInRow(multArr) {
    let maxPowNumbers = [];
    for (let i = 2; i < 10; i++) {
        let maxPowCount = countNumberPower(i, multArr)
        if (maxPowCount != 0) {
            maxPowNumbers.push([i, maxPowCount]);
        }
    }
    return maxPowNumbers
}

function findHighestPowerNumbersFromRows(multArr1, multArr2) {
    let maxPowNumbers = [];
    for (let i = 2; i < 10; i++) {
        let maxPowCount = Math.max(countNumberPower(i, multArr1), countNumberPower(i, multArr2))
        if (maxPowCount != 0) {
            maxPowNumbers.push([i, maxPowCount]);
        }
    }
    return maxPowNumbers
}

function countNumberPower(number, multArray) {
    let count = 0;
    multArray.forEach((mult) => {
        if (mult === number) {
            count++;
        }
    });
    return count;
    
}

function findLCM(maxPowNumbers) {
    let LCM = maxPowNumbers.reduce((acc, item) => {
        if (acc === 0) {
            acc += item[0] ** item[1];
        } else {
            acc *= item[0] ** item[1];
        }
        return acc 
    }, 0)
    return LCM;
}