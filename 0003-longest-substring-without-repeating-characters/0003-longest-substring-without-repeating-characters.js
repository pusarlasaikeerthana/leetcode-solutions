/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {
    if (!str) {
        return 0;
    }

    let maxLength = 0;
    
    for(var i=0; i<str.length; i++){
        var sub_str = ""
        for( var j=i; j<str.length; j++) {
          if(!sub_str.includes(str[j]) && j== str.length-1){
                sub_str+= str[j]
                break;
            } else if(!sub_str.includes(str[j])){
              sub_str+= str[j]
            }
            else {
                break;
            }
        }
        if(sub_str.length > maxLength) {
          maxLength = sub_str.length 
        }
    }

    return maxLength;

};