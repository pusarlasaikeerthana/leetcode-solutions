/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums, target) {
    const numMap = new Map(); // Create a Map to store numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];

        const complement = target - currentNum;

        // Check if the complement already exists in our map
        if (numMap.has(complement)) {
            // If it exists, we found our two numbers
            // numMap.get(complement) gives the index of the complement
            // i is the index of the current number
            return [numMap.get(complement), i];
        }

        numMap.set(currentNum, i);
    }

    return [];
};

// var twoSum = function(nums, target) {
//    var new_nums = nums
//    for(var i=0; i<nums.length; i++) {
//     console.log(`before shift: ${nums}`)
//        var x = nums[0]
//        console.log(`x: ${x}`)
//        nums.shift()
//        console.log(`after shift: ${nums}`)        

//        for(var j=0; j<nums.length; j++){
//             var res = target-x
//             console.log(`res: ${res}`)
//             if(nums.includes(res)){
//                 return [i,i+j+1]
//             }
//        }
       
//    }
// };