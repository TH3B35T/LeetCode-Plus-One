/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    large_int = BigInt(digits.join(''));
    return (String(large_int+1n).split('').map(Number));
}
