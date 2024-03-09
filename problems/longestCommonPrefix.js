/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = '';
  if (!strs.length) {
    return prefix;
  }
  let index = 0;
  for (const char of strs[0]) {
    for (let i = 1; i < strs.length; i++) {
      if (index >= strs[i].length || char !== strs[i][index]) {
        return prefix;
      }
    }
    prefix += char;
    index++;
  }
  return prefix;
};
