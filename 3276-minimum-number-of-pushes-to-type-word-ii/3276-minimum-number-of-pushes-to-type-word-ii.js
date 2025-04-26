/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    console.log(word.toString())
    var obj = {}
    var result = 0
    for(var i=0; i<word.length; i++){
        if(!obj[word[i]]){
            obj[word[i]] = 1
        } else {
            obj[word[i]] += 1
        }
    }
    console.log(obj)

    const sortedEntries = Object.entries(obj).sort(([, valueA], [, valueB]) => valueA - valueB);
    console.log(sortedEntries)
    console.log(sortedEntries.length)
    console.log(Object.fromEntries(sortedEntries))

    for(var j=sortedEntries.length-1; j>=0; j--){
        var k = sortedEntries.length - j -1
        const multiplier = Math.floor(k / 8) + 1;
        console.log(sortedEntries[j][0])
        console.log("multiplier: " + multiplier)
        result += (sortedEntries[j][1] * multiplier)
    }
    console.log(result)  
    return result  
};





