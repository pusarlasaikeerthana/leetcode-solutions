/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    var arr = s.split("")
    var open_count = 0
    var closed_count = 0
    var res = []
    console.log(arr.length)

    if(arr.length % 2 != 0){
        console.log(`length in if ${arr.length}`)
        return false;
    } else {

        for(var i=0; i<arr.length; i++){
            if(arr[i] == "{" || arr[i] == "[" || arr[i] == "("){
                res.push(arr[i])
            } else{

                if(arr[i] == ")" && res[res.length-1] != "(") {
                   return false
                } else if(arr[i] == "]" && res[res.length-1] != "["){
                    return false
                } else if(arr[i] == "}" && res[res.length-1] != "{"){
                    return false
                }
                res.pop()

            }
        }
    }

    if(res.length != 0){
        return false;
    }

    return true
    
};