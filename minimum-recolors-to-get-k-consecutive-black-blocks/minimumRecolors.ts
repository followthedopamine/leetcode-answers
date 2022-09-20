// https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/

const minimumRecolors = (blocks: string, k: number): number => {
  const blockArr = blocks.split("");
  let count = 0;
  let min = 0;
  for (let i = 0; i < blockArr.length; i++) {
    if (i < k && blockArr[i] === "W") {
      count++;
      min++;
    } else {
      if (blockArr[i] === "W") count++;
      if (blockArr[i - k] === "W") count--;
      if (count < min) min = count;
    }
  }
  return min;
};

export default minimumRecolors;
