/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x;

  let left = 0;
  let right = x;

  while (left <= right) {
    let mid = (left + right) >>> 1;
    let squared = mid * mid;

    if (squared === x) {
      return mid;
    }

    if (squared < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
};
