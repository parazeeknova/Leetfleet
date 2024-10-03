function firstMissingPositive(nums: number[]): number {
    let index: number = nums.length;
    let zeroFilled: number[] = new Array(index+1).fill(0);

    for (let i = 0; i < index; i++) {
        let num = nums[i];
        let op = (num > 0 && num <= index) ? zeroFilled[num-1] = num:'';
    };

    return zeroFilled.indexOf(0) + 1;
};