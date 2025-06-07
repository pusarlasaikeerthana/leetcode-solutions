/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    if (prices === null || prices.length < 2) {
        return 0; // Not enough days to make a trade
    }

    let minPrice = prices[0]; // Initialize minPrice with the first day's price
    let maxProfit = 0;        // Initialize maxProfit to 0 (no profit yet)

    // Iterate through the prices starting from the second day
    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];

        // 1. Update maxProfit: Calculate potential profit if we sell today
        //    (currentPrice - minPrice) and compare with current maxProfit
        maxProfit = Math.max(maxProfit, currentPrice - minPrice);

        // 2. Update minPrice: If today's price is lower than minPrice,
        //    update minPrice. This ensures we always have the lowest buying point encountered so far.
        minPrice = Math.min(minPrice, currentPrice);
    }

    return maxProfit;
};


// var maxProfit = function(prices) {
    
//     var res_arr = []
//     for(var j=0; j<prices.length-1; j++){
//         var num = prices[j]
//         var arr = []
//         for(var i=j+1; i<prices.length; i++){
//             var target = prices[i]
//             var res = target - num
//             arr.push(res)
            
//         }
//         res_arr.push(Math.max(...arr))
//     }

//     var output = Math.max(...res_arr)
//     if(output < 1){
//         return 0
//     }
//     return output
// };