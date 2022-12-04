/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const map = {};
  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split('').sort().join('');
    map[sorted] ? map[sorted].push(strs[i]) : map[sorted] = [strs[i]];
  }

  return Object.values(map);
};
