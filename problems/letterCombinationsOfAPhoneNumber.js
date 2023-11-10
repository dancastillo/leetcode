/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  const results = []

  const getCombinations = (index, comboString) => {
    if (index === digits.length) {
      results.push(comboString)
      return
    }

    for (const c of map[digits[index]]) {
      getCombinations(index + 1, comboString + c)
    }
  }

  if (digits.length === 0) {
    return results
  }

  getCombinations(0, '')

  return results
}
