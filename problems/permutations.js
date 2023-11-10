/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const result = []
  const temp = []
  permutations(temp, nums, result)
  return result
}

const permutations = (temp, nums, result) => {
  if (!nums.length) {
    result.push(temp.concat())
    return
  }

  for (let i = 0; i < nums.length; i++) {
    const newNum = nums[i]
    temp.push(newNum)
    nums.splice(i, 1)

    permutations(temp, nums, result)

    temp.pop()
    nums.splice(i, 0, newNum)
  }
}
