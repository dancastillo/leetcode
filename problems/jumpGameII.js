/**
 * @param {number[]} nums
 * @return {number}
 */
const findJump = function (nums) {
  if (nums.length <= 1) {
    return 0
  }
  // keep track of largest ladder
  let ladder = nums[0]
  // keep track of stairs in current ladder
  let stairs = nums[0]

  let jump = 1

  for (let level = 1; level < nums.length; level++) {
    if (level === nums.length - 1) {
      return jump
    }
    if (level + nums[level] > ladder) {
      ladder = level + nums[level]
    }

    stairs--
    if (stairs === 0) {
      // no stairs are left -> jump to next index;
      jump++
      // get new set of stairs
      stairs = ladder - level
    }
  }

  return jump
}
