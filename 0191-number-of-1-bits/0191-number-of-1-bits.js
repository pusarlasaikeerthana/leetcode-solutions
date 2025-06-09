/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    
    var binary = n.toString(2)
    var arr = binary.split('')
    const onesArray = arr.filter(char => char === '1');
    const count = onesArray.length;

    return count

};