/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  let majority = nums[0]
  const countMap = {
    [nums[0]]: 1
  }

  for (let i = 1; i < nums.length; i++) {
    countMap[nums[i]] = (countMap[nums[i]] ?? 0) + 1
    if (countMap[majority] < countMap[nums[i]]) { majority = nums[i] }
  }

  return majority
}
