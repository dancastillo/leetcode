/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) {
    return [];
  }
  const result = [[1]];
  if (numRows === 1) {
    return result;
  }

  result.push([1, 1]);
  if (numRows === 2) {
    return result;
  }

  console.log('before for');
  console.log(result);
  for (let i = 2; i < numRows + 1; i++) {
    console.log('------');
    const row = [1];
    let idx = 1;
    while (idx < i - 1) {
      console.log('i - 1', i - 1);
      console.log('idx - 1', idx - 1);
      console.log(result[i - 1]);
      const topLeft = result[i - 1][idx - 1];
      const top = result[i - 1][idx];
      row.push(topLeft + top);
      idx++;
      console.log(row);
    }
    row.push(1);
    console.log(row);
    result.push(row);
  }

  return result;
};

console.log(generate(5));
