/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  
  if (!strs || strs.length === 0) {
    return "";
  }

  // Take the first string as a potential prefix
  let prefix = strs[0];

  // Iterate through the rest of the strings in the array
  for (let i = 1; i < strs.length; i++) {
    // While the current string doesn't start with the current prefix
    console.log(strs[i].indexOf(prefix) !== 0)
    while (strs[i].indexOf(prefix) !== 0) {
      // Shorten the prefix by removing the last character
      prefix = prefix.substring(0, prefix.length - 1);
      console.log(prefix)

      if (prefix === "") {
        return "";
      }
    }
  }

  return prefix;
    
};

