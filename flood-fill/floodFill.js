"use strict";
// https://leetcode.com/problems/flood-fill/
Object.defineProperty(exports, "__esModule", { value: true });
const floodFillRC = (image, sr, sc, color, originalColor) => {
    if (image[sr][sc] === originalColor) {
        image[sr][sc] = color;
        if (sr - 1 >= 0)
            floodFillRC(image, sr - 1, sc, color, originalColor); // Top
        if (sr + 1 <= image.length - 1)
            floodFillRC(image, sr + 1, sc, color, originalColor); // Bottom
        if (sc - 1 >= 0)
            floodFillRC(image, sr, sc - 1, color, originalColor); // Left
        if (sc + 1 <= image[0].length - 1)
            floodFillRC(image, sr, sc + 1, color, originalColor); // Right
    }
};
const floodFill = (image, sr, sc, color) => {
    if (image[sr][sc] !== color) {
        floodFillRC(image, sr, sc, color, image[sr][sc]);
        image[sr][sc] = color;
    }
    return image;
};
exports.default = floodFill;
