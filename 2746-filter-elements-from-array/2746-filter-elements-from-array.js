/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var output = []
    for(var i=0;i<arr.length;i++){
        var flag = fn(arr[i],i)
        if(flag){
         output.push(arr[i])
        }
    }
    return output
};