const backtracking = (results, currentStr, max, open, close) => {
  if (currentStr.length === max * 2) {
    results.push(currentStr);

    return;
  }

  if (open < max) {
    backtracking(results, `${currentStr}(`, max, open + 1, close);
  }

  if (close < open) {
    backtracking(results, `${currentStr})`, max, open, close + 1);
  }
};

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  const results = [];
  backtracking(results, '', n, 0, 0);

  return results;
};
