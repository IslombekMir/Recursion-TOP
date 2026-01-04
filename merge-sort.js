#!/usr/bin/env node
const merge = function (arr1, arr2, resultArr = []) {
    if (arr1.length === 0 && arr2.length === 0) {
        return resultArr;
    }

    if (arr1.length === 0) {
        resultArr.push(...arr2);
        arr2.length = 0;
    } else if (arr2.length === 0) {
        resultArr.push(...arr1);
        arr1.length = 0;
    } else if (arr1[0] < arr2[0]) {
        resultArr.push(arr1.shift());
    } else {
        resultArr.push(arr2.shift());
    }
    return merge(arr1, arr2, resultArr);
}



const sort = function (arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        const firstHalf = arr.slice(0, Math.floor(arr.length / 2));
        const secondHalf = arr.slice(Math.floor(arr.length / 2));

        const arr1 = sort(firstHalf);
        const arr2 = sort(secondHalf);

        return merge(arr1, arr2);
    }
}

console.log(sort([]));