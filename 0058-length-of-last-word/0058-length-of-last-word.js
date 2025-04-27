/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var arr = s.split(" ")
    // console.log(arr)
    var new_arr = arr.reverse()
    for(var i=0; i<new_arr.length; i++){
        if(new_arr[i]!= ""){
            // console.log(new_arr[i].length)
            return new_arr[i].length
        }
    }
};