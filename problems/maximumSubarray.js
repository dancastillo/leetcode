/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let globalMax = nums[0];
  let currentMax = globalMax;

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);

    if (currentMax > globalMax) {
      globalMax = currentMax;
    }
  }

  return globalMax;
};
