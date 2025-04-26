/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
// Simple Recursive Solution

var flat = function (arr, n) {
    if(n == 0 || arr.every(el => typeof el === 'number')) return arr;

    let res = [];
    for(let i=0;i<arr.length;i++) {
        if(Array.isArray(arr[i])) {
            res.push(...flat(arr[i], n-1));
        } else res.push(arr[i]);
    }
    return res;
};