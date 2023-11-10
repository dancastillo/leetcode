/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  if (nums.length === 3) {
    return nums[0] + nums[1] + nums[2]
  }

  let result = nums[0] + nums[1] + nums[nums.length - 1]
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    let aPointer = i + 1
    let bPointer = nums.length - 1

    while (aPointer < bPointer) {
      const currentSum = nums[i] + nums[aPointer] + nums[bPointer]

      if (currentSum > target) {
        bPointer--
      } else {
        aPointer++
      }

      if (Math.abs(currentSum - target) < Math.abs(result - target)) {
        result = currentSum
      }
    }
  }

  return result
}
