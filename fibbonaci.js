#!/usr/bin/env node

const fibbonaci = function (n) {
    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        const prevArr = fibbonaci(n - 1);
        const last = prevArr[prevArr.length - 1];
        const oneToLast = prevArr[prevArr.length - 2];
        const newValue = last + oneToLast;
        prevArr.push(newValue);
        return prevArr;
    }
}

console.log(fibbonaci(8))

// 0 1 1 2 3 5 8 13 21 ...s