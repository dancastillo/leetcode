/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  const isAlphanumeric = (char) => {
    const code = char.charCodeAt(0)
    return (code > 47 && code < 58) || (code > 96 && code < 123)
  }

  let str = ''
  for (let i = 0; i < s.length; i++) {
    str += isAlphanumeric(s[i].toLowerCase()) ? s[i].toLowerCase() : ''
  }

  let start = 0
  let end = str.length - 1
  while (start < end) {
    if (str[start] !== str[end]) {
      return false
    }
    start++
    end--
  }
  return rue
}
