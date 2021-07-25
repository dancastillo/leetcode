/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i].split('').sort().join('');
    map[sorted] ? map[sorted].push(strs[i]) : map[sorted] = [strs[i]];
  }
  
  return Object.values(map);
};
