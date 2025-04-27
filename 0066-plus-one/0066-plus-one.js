/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var value = digits.join('')
    value = BigInt(value) + BigInt(1)
    var res = value.toString().split("").map(Number)
    return res

};