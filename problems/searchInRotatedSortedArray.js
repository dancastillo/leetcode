/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  if (!nums || nums.length === 0) {
    return -1;
  }

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const midpoint = Math.floor(left + (right - left) / 2);
    if (nums[midpoint] > nums[right]) {
      left = midpoint + 1;
    } else {
      right = midpoint;
    }
  }

  const start = left;
  left = 0;
  right = nums.length - 1;

  if (target >= nums[start] && target <= nums[right]) {
    left = start;
  } else {
    right = start;
  }

  while (left <= right) {
    const midpoint = Math.floor(left + (right - left) / 2);
    if (target === nums[midpoint]) {
      return midpoint;
    } if (nums[midpoint] < target) {
      left = midpoint + 1;
    } else {
      right = midpoint - 1;
    }
  }

  return -1;
};
