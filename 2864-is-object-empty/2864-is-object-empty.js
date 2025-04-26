/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    var out = JSON.stringify(obj).length
    if(out > 2){
        return false
    }
    return true
};