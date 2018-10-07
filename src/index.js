module.exports = function solveSudoku(matrix) {
  isSolve(matrix);
  return matrix;
  function isSolve(matrix) {
    let currSolve = matrix;
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (matrix[row][col] == 0) {
          for (let num = 1; num < 10; num++) {
            if (checker(matrix, row, col, num) == true) {
              matrix[row][col] = num;
              currSolve = isSolve(matrix);
              if (currSolve) {
                return true;
              }
              matrix[row][col] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  function checker(matrix, row, col, num) {
    let rowBlock = Math.floor(row / 3) * 3;
    let colBlock = Math.floor(col / 3) * 3;
    for (let i = 0; i < 9; i++) {
      if (matrix[row][i] == num || matrix[i][col] == num || matrix[rowBlock + Math.floor(i / 3)][colBlock + i % 3] == num) {
        return false;
      }
    }
    return true;
  }
}