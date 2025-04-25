/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {

    var new_arr = []
    
    var obj = {}
    
    for(var i=0; i<arr.length; i++){
        var ele = arr[i]
        if(!obj[ele]){
            obj[ele] = 1
        }else{
        obj[ele] += 1
        }
    }
    
    for( var item in obj){
        if(obj[item] == 1){
            new_arr.push(item)
        }
    }
    if(new_arr.length > k-1){
        return new_arr[k-1]
    }else{
        return ""
    }
    
};