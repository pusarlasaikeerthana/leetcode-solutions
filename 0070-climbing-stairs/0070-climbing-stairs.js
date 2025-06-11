/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    if(n <= 0){
        return  0
    } else if(n == 1){
        return 1
    }

    let a = 0; // Represents F(i-2)
    let b = 1; // Represents F(i-1)
    let temp;

    for (let i = 1; i <= n; i++) {
        temp = a + b; // Calculate F(i)
        a = b;        // Update a to be the old b (F(i-1))
        b = temp;     // Update b to be the new F(i)
    }

    return b;

};



