/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    nums.sort((a,b) => a-b)
    // console.log(nums)
    if(nums.length == 0){
        return 0
    }
    if(nums.length == 1){
        return 1
    }
    var maxLength = 0
    var res = []
    for(var i=0; i<nums.length; i++) {
        var n = nums[i]
        
        if(nums[i] + 1 == nums[i+1]) {
            res.push(nums[i+1])
        } else if(nums[i] == nums[i+1]) {
            continue;
        } else {
            if(res.length > maxLength) {
                maxLength = res.length
            }
            res = []
        }
    }
    return maxLength+1
};