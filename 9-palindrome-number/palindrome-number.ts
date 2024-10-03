function isPalindrome(x: number): boolean {
    let str: string = x.toString();
    let tempr: string = '';
    for (let temp of str ) {
        tempr = temp + tempr;
    };
    if (str === tempr) {
        return true
    } else {
        return false
    }
};