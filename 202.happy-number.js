/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
    function sumOfSquares(num) {
        let total = 0;

        while (num > 0) {
            let digit = num % 10;
            total += digit ** 2;
            num = Math.floor(num / 10);
        }
        
        return total;
    }

    let seenNumbers = new Set();
    while (n !== 1 && !seenNumbers.has(n)) {
        seenNumbers.add(n);
        n = sumOfSquares(n);
    }

    return n === 1;
}
