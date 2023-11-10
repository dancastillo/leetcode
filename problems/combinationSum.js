function backtrack (results, tmpArr, candidates, remaining, start) {
  if (remaining < 0) {

  } else if (remaining === 0) {
    results.push([...tmpArr])
  } else {
    for (let i = start; i < candidates.length; i++) {
      tmpArr.push(candidates[i])
      backtrack(results, tmpArr, candidates, remaining - candidates[i], i)
      tmpArr.pop()
    }
  }
}

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
  const results = []
  backtrack(results, [], candidates, target, 0)

  return results
}
