/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let results = [];
  backtrack(results, [], candidates, target, 0);
  
  return results;
};

function backtrack(results, tmpArr, candidates, remaining, start) {
  if (remaining < 0) {
    return;
  } else if (remaining === 0) {
    results.push([...tmpArr]);
  } else {
    for (let i = start; i < candidates.length; i++) {
      tmpArr.push(candidates[i]);
      backtrack(results, tmpArr, candidates, remaining - candidates[i], i);
      tmpArr.pop();
    }
  }
}
