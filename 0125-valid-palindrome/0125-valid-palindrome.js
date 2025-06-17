/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var word = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    var reverse_word = ""

    for(var i=word.length-1 ; i >= 0; i--){
        reverse_word += word[i]
    }

    return word === reverse_word

};