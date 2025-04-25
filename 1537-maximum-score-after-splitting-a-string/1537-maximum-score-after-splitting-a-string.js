/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {

  let leftZeros = 0; // Count of zeros in the left substring
  let rightOnes = 0; // Count of ones in the right substring
  let maxScore = 0;

  for(var i=0; i<s.length; i++){
    console.log(s[i])
    if(s[i] === "1"){
        rightOnes++
    }
  }
  console.log(rightOnes)

  for(var j=0; j<s.length-1; j++){
    console.log(s[j])
    if(s[j] === "0"){
        leftZeros++
    } else{
        rightOnes--
    }

     let score = leftZeros + rightOnes;
     maxScore = Math.max(maxScore, score);
  }


  console.log(maxScore)
    return maxScore;

    
};