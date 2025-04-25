/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var y = x.toString().split("").reverse().join("")
    var reversedNum = parseInt(y)
    if(x==y){
        return true
    }
    return false;
};