/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1); // Initialize answer array with 1s

    // 1. Calculate prefix products
    // answer[i] will store the product of elements to the left of nums[i]
    // For answer[0], there are no elements to its left, so it remains 1 (initialized)
    let prefixProduct = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = prefixProduct; // Store the product of elements *before* nums[i]
        prefixProduct *= nums[i];   // Update prefixProduct for the next iteration
    }
    // console.log(answer)
    // console.log(prefixProduct)

    let suffixProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= suffixProduct; // Multiply current answer[i] (which holds prefix product)
        // console.log(suffixProduct)
        // console.log("i " + i + " answer[i] " +answer[i])
                                   // by the suffix product
        suffixProduct *= nums[i];  // Update suffixProduct for the next iteration
    }

    // console.log(answer)
    // console.log (suffixProduct)
    return answer
};