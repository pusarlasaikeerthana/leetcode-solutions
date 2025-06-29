/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // 1. Sort the array
    nums.sort((a, b) => a - b); // Use a comparison function for numerical sort

    const result = [];

    // 2. Iterate and fix one element (nums[i])
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate elements for nums[i]
        // If current element is same as previous, skip it to avoid duplicate triplets
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        const target = -nums[i]; // The sum we need from the remaining two numbers

        let left = i + 1;
        let right = nums.length - 1;

        // 3. Use the two-pointer technique
        while (left < right) {
            const currentSum = nums[left] + nums[right];

            if (currentSum === target) {
                // Found a triplet!
                result.push([nums[i], nums[left], nums[right]]);

                // Move both pointers inwards
                left++;
                right--;

                // Skip duplicate elements for nums[left] AFTER moving it
                // While left is still less than right AND current nums[left] is
                // the same as the previous one (nums[left - 1]), move left forward
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }

                // Skip duplicate elements for nums[right] AFTER moving it
                // While left is still less than right AND current nums[right] is
                // the same as the previous one (nums[right + 1]), move right backward
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }

            } else if (currentSum < target) {
                // Sum is too small, need a larger sum
                left++;
            } else { // currentSum > target
                // Sum is too large, need a smaller sum
                right--;
            }
        }
    }

    return result;
};

