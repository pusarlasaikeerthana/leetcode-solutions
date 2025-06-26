/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    if (s.length < 2) {
        return s;
    }

    let start = 0;
    let maxLength = 1; // A single character is always a palindrome

    // Helper function to expand around a center
    function expandAroundCenter(left, right) {
        
        while (left >= 0 && right < s.length && s[left] === s[right]) {
             
            left--;
            right++;
             
        }
        // After the loop, left and right are one step too far
        // The palindrome is from (left + 1) to (right - 1)
        const currentLength = right - left - 1;
        if (currentLength > maxLength) {
            maxLength = currentLength;
            start = left + 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        console.log("yes")
        // Case 1: Odd length palindromes (e.g., "aba", center is 'b')
        expandAroundCenter(i, i);

        // Case 2: Even length palindromes (e.g., "abba", center is 'bb')
        expandAroundCenter(i, i + 1);
    }

    return s.substring(start, start + maxLength);
};