// https://leetcode.com/problems/flood-fill/

const floodFillRC = (
  image: number[][],
  sr: number,
  sc: number,
  color: number,
  originalColor: number
): void => {
  if (image[sr][sc] === originalColor) {
    image[sr][sc] = color;
    if (sr - 1 >= 0) floodFillRC(image, sr - 1, sc, color, originalColor); // Top
    if (sr + 1 <= image.length - 1)
      floodFillRC(image, sr + 1, sc, color, originalColor); // Bottom
    if (sc - 1 >= 0) floodFillRC(image, sr, sc - 1, color, originalColor); // Left
    if (sc + 1 <= image[0].length - 1)
      floodFillRC(image, sr, sc + 1, color, originalColor); // Right
  }
};

const floodFill = (
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] => {
  if (image[sr][sc] !== color) {
    floodFillRC(image, sr, sc, color, image[sr][sc]);
    image[sr][sc] = color;
  }
  return image;
};

export default floodFill;
