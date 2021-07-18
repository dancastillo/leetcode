 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const find = (target, arr, left = 0, right = arr.length) => {
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      return left;
    }
    
    let tLeft = find(target, nums);
    if (nums[tLeft] !== target) {
      return [-1, -1];
    }
  
  return [tLeft, find(target + 1, nums, tLeft) - 1]
};
