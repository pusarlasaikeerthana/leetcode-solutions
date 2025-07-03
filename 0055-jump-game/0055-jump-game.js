/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function(nums) {
    if (nums.length < 2) {
        return true; 
    }
    let farthest_reach = 0; 
    
    for (let i = 0; i < nums.length; i++) {
       
        if (i > farthest_reach) {
            return false;
        }
        farthest_reach = Math.max(farthest_reach, i + nums[i]);
       
        if (farthest_reach >= nums.length - 1) {
            return true;
        }
    }
    return false;
};