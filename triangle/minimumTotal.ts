// https://leetcode.com/problems/triangle
const minimumTotal = (triangle: number[][]): number => {
  for (let i = 1; i < triangle.length; i++) {
    const elementsLength: number = triangle[i].length;
    for (let j = 0; j < elementsLength; j++) {
      const leftValue: number = triangle[i - 1][j - 1] ?? Infinity;
      const rightValue: number = triangle[i - 1][j] ?? Infinity;
      triangle[i][j] += leftValue < rightValue ? leftValue : rightValue;
    }
  }
  return triangle[triangle.length - 1].reduce((acc, sum) =>
    acc < sum ? acc : sum
  );
};

export default minimumTotal;
