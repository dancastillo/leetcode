/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = []
  const match = {
    ']': '[',
    '}': '{',
    ')': '('
  }

  for (const bracket of s) {
    if (match[bracket] === undefined) {
      stack.push(bracket)
    } else {
      const opening = stack.pop()
      if (opening !== match[bracket]) {
        return false
      }
    }
  }

  return true && stack.length === 0
}
