/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function (root) {
  const bfs = (left, right) => {
    if (!left && !right) {
      return true
    }

    if (!left || !right) {
      return false
    }

    if (left.val !== right.val) {
      return false
    }

    return bfs(left.left, right.right) && bfs(left.right, right.left)
  }

  return bfs(root.left, root.right)
}
