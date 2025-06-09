/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {

    var res_arr = []

    for(var i=0; i<=n; i++){
        var num = i
        var binary = i.toString(2)
        var arr = binary.split('')
        var onesArray = arr.filter(char => char === '1');
        var count = onesArray.length;
        res_arr.push(count)
    }
    return res_arr
};