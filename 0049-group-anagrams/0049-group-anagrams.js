/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var obj = {}
    
    for(var i=0; i<strs.length; i++) {
        var word = strs[i].split('').sort().join('')
        if(!obj[word]){
          obj[word] = [] 
        }
        obj[word].push(strs[i])
    }

    return Object.values(obj)
};