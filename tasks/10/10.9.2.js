"use strict";

const output = document.getElementById("output1092");

function highlightCssCode() {
    const numericValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "p", "x", "r", "e", "m", " "]
    let code = output.textContent;
    let bracketsOpened = false;
    let bracketsCount = 0;
    let roundBracketsCount = 0;
    let outputStr = "<span class='outBrackets'>";
    let currentStrFragment = "";
    let codeCharArr = code.split("");
    for (let i = 0; i < codeCharArr.length; i++) {
        if (bracketsOpened === false && codeCharArr[i] === "*") {
            currentStrFragment += "<span class='outBracketsSigns'>" + codeCharArr[i] + "</span>";
            continue;
        }
        if (codeCharArr[i] === "{" || codeCharArr[i] === "}") {
            if (codeCharArr[i] === "{") {
                outputStr += currentStrFragment + "</span>";
                currentStrFragment = "";
                if (bracketsCount < 3) {
                    bracketsCount++;
                } else {
                    bracketsCount = 1;
                }
                outputStr += `<span class="brackets${bracketsCount}">{</span><span class="keys">`;
            } else {
                outputStr += currentStrFragment + `</span><span class="brackets${bracketsCount}">}</span><span class="outBracketsContent">`;
                currentStrFragment = "";
                bracketsCount--;
            }
            continue;
        }
        if (codeCharArr[i] === "(" || codeCharArr[i] === ")") {
            if (codeCharArr[i] === "(") {
                if (roundBracketsCount < 3) {
                    roundBracketsCount++;
                } else {
                    roundBracketsCount = 1;
                }
                currentStrFragment += `<span class="roundBrackets${bracketsCount}">(</span>`;
            } else {
                currentStrFragment += `<span class="roundBrackets${bracketsCount}">)</span>`;
                roundBracketsCount--;
            }
            continue;
        }

        if (codeCharArr[i] === ":") {
            currentStrFragment += `</span><span class="semicolon">:</span>`
            let selectorValue = "";
            let j = i + 1;
            let isNumeric = true;
            while (codeCharArr[j] != "\n") {
                selectorValue += codeCharArr[j];
                if (!numericValues.includes(codeCharArr[j])) {
                    isNumeric = false;
                }
                j++;
            }
            if (isNumeric) {
                currentStrFragment += `<span class="valuesNumbers">` + selectorValue + `</span><span class="keys">`;
            } else {
                currentStrFragment += `<span class="valuesText">` + selectorValue + `</span><span class="keys">`;
            }
            i += selectorValue.length;
            continue;
        }


        currentStrFragment += codeCharArr[i];
    }
    outputStr += "</span>"
    output.innerHTML = outputStr;
}

document.addEventListener("DOMContentLoaded", () => {
    highlightCssCode();
})