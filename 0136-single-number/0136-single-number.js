/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    // nums.forEach((num) => )

    var obj = {}

    for(var ele in nums){
        if(obj[nums[ele]]){
            obj[nums[ele]] += 1
        } else {
            obj[nums[ele]] = 1
        }
    }

    console.log(obj)

    const keyWithValueOne = Object.keys(obj).find(key => obj[key] === 1);
    return parseInt(keyWithValueOne)
};