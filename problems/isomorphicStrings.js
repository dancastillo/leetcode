/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
  const sHash = {};
  const tHash = {};

  for (let i = 0; i < s.length; i++) {
    if (!sHash[s[i]]) {
      sHash[s[i]] = t[i];
    }
    if (!tHash[t[i]]) {
      tHash[t[i]] = s[i];
    }
    if (sHash[s[i]] !== t[i]) {
      return false;
    }
    if (tHash[t[i]] !== s[i]) {
      return false;
    }
  }
  return true;
};
