func twoSum(nums []int, target int) []int {
    numMap := make(map[int]int)

	for i, currentNum := range nums {
		// Calculate the complement needed to reach the target.
		complement := target - currentNum

		// Check if the complement already exists in our map.
		// The `ok` variable will be true if the key exists, and `idx` will be its value.
		if idx, ok := numMap[complement]; ok {
			// If the complement exists, we've found our two numbers.
			// Return the index of the complement (idx) and the current number's index (i).
			return []int{idx, i}
		}

		// If the complement is not found, add the current number and its index to the map.
		numMap[currentNum] = i
	}

	// If no solution is found after iterating through the entire slice,
	// return an empty slice as per the problem's typical requirements.
	return []int{}
}