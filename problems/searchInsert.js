/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  return binarySearch(nums, target, 0, nums.length - 1)
}

function binarySearch (array, target, start, end) {
  if (start > end) {
    return start
  }

  const mid = Math.floor((start + end) / 2)

  if (array[mid] === target) {
    return mid
  }

  if (array[mid] > target) {
    binarySearch(array, target, start, mid - 1)
  }

  if (array[mid] < target) {
    binarySearch(array, target, mid + 1, end)
  }
}
