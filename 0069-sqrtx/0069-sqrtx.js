/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    var i=0;

    while(i*i <= x){
        i++
    }
    return i-1
};