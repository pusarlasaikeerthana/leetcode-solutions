/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
  console.log(nums)
  if(checkSort(nums)){
   return true
  }else{
 
   for(var i=0; i<nums.length; i++){
       nums.push(nums.shift())
       console.log(nums)
       if(checkSort(nums)){
           return true
       }
   }
   return false
  }
};




function checkSort(nums){


 for (let i = 0; i < nums.length - 1; i++) {
   if (nums[i] > nums[i + 1]) {
     return false; // If an element is greater than the next one, it's not ascending
   }
 }
 return true;


}
