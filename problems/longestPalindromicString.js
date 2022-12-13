/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = '';
  const valid = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (result.length < s.substring(left, right + 1).length) {
        result = s.substring(left, right + 1);
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    valid(i, i);
    valid(i, i + 1);
  }

  return result;
};
