 /*Runtime: 87 ms, faster than 82.22% of TypeScript online submissions for Two Sum II - Input Array Is Sorted.
Memory Usage: 43.8 MB, less than 62.81% of TypeScript online submissions for Two Sum II - Input Array Is Sorted.*/
 
 const twoSum = (numbers: number[], target: number): number[] => {
    let left: number = 0;
    let right: number = numbers.length - 1;

    while(left < right) {
        let current: number = numbers[left] + numbers[right];
        if(current === target) {
            return [left + 1, right + 1];
        }
        if(current < target) {
            left++;
        }
        if(current > target) {
            right--;
        }
    }
    return [-1, -1]
}

export default twoSum;