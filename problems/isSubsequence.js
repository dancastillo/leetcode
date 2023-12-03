/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length === 0) return true;
  if (t.length === 0) return false;
  if (s.length > t.length) return false;

  let idx = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[idx] === t[i]) idx++;
  }

  return idx === s.length;
};
