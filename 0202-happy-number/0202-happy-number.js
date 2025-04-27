/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
    if (n < 10) {
        return n === 1 || n === 7;
    }
    let sum = 0;
    while (n > 0) {
        const digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return isHappy(sum);
}