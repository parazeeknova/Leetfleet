function searchInsert(nums: number[], target: number): number {
    if (nums.includes(target)) {
        return nums.indexOf(target);
    } else {
        let revindex: number = nums.length - 1;
        if (nums[revindex] < target) {
            return revindex + 1;
        } else {
            while (target < nums[revindex]) {
                revindex--;
            }
            return revindex + 1;
        };
    };
};