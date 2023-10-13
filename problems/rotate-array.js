/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const reverse = (arr, start, end) => {
    while (start < end) {
      const tmp = arr[start]
      arr[start] = arr[end]
      arr[end] = tmp
      end--
      start++
    }
  }

  k = k % nums.length
  if (k === 0 || nums.length === 0 || k === nums.length) return
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)
};
