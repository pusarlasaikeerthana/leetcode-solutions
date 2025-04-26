/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    var res = []

    var n = size
    var j = 0 

    for(var i=0;i<arr.length; i++){
       res.push(arr.slice(j,size+j))
       j = size + j
    }

    var output = res.filter(ele => ele.length>0)
    console.log(output)
    return output
};
