// https://leetcode.com/problems/reverse-string

/* Runtime: 95 ms, faster than 97.41% of TypeScript online submissions for Reverse String. */

/**
 Do not return anything, modify s in-place instead.
 */
const reverseString = (s: string[]): void => {
    let left: number = 0;
    let right: number = s.length - 1;
    let temp: string = "";
    while(left < right) {
        temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        right--;
        left++;
    }
};

export default reverseString;