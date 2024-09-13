/*
 * @lc app=leetcode id=2011 lang=javascript
 *
 * [2011] Final Value of Variable After Performing Operations
 */

// @lc code=start
/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let x = 0;
  for (let item of operations) {
    item == "++X" || item == "X++" ? (x += 1) : (x -= 1);
  }
  return x;
};

// Complexidade de Tempo: O(n)
// Complexidade de Espaço: O(1)
