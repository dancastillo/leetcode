/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  const seen = {};

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const currentPosition = board[i][j];

      if (currentPosition !== '.') {
        const row = `${currentPosition} row ${i}`;
        const column = `${currentPosition} column ${j}`;
        const square = `${currentPosition} square ${Math.floor(i / 3)} and ${Math.floor(j / 3)}`;

        if (seen[row] || seen[column] || seen[square]) {
          return false;
        }

        seen[row] = row;
        seen[column] = column;
        seen[square] = square;
      }
    }
  }

  return true;
};
