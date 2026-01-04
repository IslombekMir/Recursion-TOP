#!/usr/bin/env node

const fibbonaci = function (n) {
    if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        return fibbonaci(n - 1) + fibbonaci(n - 2)
    }
}

console.log(fibbonaci(4))

// 0 1 1 2 3 5 8 13 21 ...s