/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
   
    nums.sort((a, b) => a - b)
    console.log(nums)
    
    if(nums[0] != 0){
        return 0
    }


    for(var i=0; i<nums.length; i++) {
        if(nums[i] + 1 != nums[i+1]){
            return nums[i]+1
        }
    }
};

// if(nums.length == 1){
    //     if(nums[0] != 0) {
    //       return 0
    //     } else{
    //        return 1
    //     }
    // }