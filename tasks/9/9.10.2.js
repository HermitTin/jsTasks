"use strict";

const input = document.getElementById("input9102");
const output = document.getElementById("output9102");
const srcArr = [1, [1, [[2]], [3]], 3]

input.textContent = srcArr;
output.textContent = "The maximum nesting level of array is: " + nestingCount(srcArr);

function nestingCount(arr) {
    let count = 1;
    for (let item of arr) {
        if (Array.isArray(item)) {
            let subArrCount = checkNesting(item, count + 1);
            count = Math.max(count, subArrCount);
        }
    }
    return count
}

function checkNesting(subArr, count) {
    for (let subItem of subArr) {
        if (Array.isArray(subItem)) {
            count = checkNesting(subItem, count + 1)
        }
    }
    return count;
}