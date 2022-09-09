// https://leetcode.com/problems/reverse-words-in-a-string-iii/

const reverseString = (str: string) => {
    let sArr: string[] = str.split("");
    let left: number = 0;
    let right: number = str.length - 1;
    while(left < right) {
        [sArr[left], sArr[right]] = [sArr[right], sArr[left]];
        left++;
        right--;
    }
    return sArr.join("");
}

// Not sure if it's a typescript thing but I couldn't get this to work modifying strArr in place with either map or a for of loop.
const reverseWords = (s: string): string => {
    let strArr: string[] = s.split(" ");
    let result: string[] = [];
    for(let str of strArr) {
        result.push(reverseString(str));
    }
    return result.join(" ");
};

export default reverseWords;