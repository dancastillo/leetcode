/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let results = [];
    backtracking(results, "", n, 0, 0);
    
    return results;
};

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
}
