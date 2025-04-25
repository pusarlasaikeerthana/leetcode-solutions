/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {

    var output = []

    for(var i=0;i<arr.length;i++){
        output[i] = fn(arr[i],i)
    }
    return output
    
};