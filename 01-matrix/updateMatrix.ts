// https://leetcode.com/problems/01-matrix

const updateMatrix = (matrix: number[][]): number[][] => {
  let longestPath = matrix.length + matrix[0].length - 2;
  const rows = matrix.length;
  const cols = matrix[0].length;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === 0) continue;

      matrix[row][col] = Math.min(
        matrix[row - 1] ? matrix[row - 1][col] + 1 : longestPath,
        matrix[row][col - 1] !== undefined
          ? matrix[row][col - 1] + 1
          : longestPath
      );
    }
  }

  for (let row = rows - 1; row >= 0; row--) {
    for (let col = cols - 1; col >= 0; col--) {
      if (matrix[row][col] === 0) continue;

      matrix[row][col] = Math.min(
        matrix[row][col],
        matrix[row + 1] ? matrix[row + 1][col] + 1 : longestPath,
        matrix[row][col + 1] !== undefined
          ? matrix[row][col + 1] + 1
          : longestPath
      );
    }
  }
  return matrix;
};

export default updateMatrix;
