function isPalindrome(x: number): boolean {
    let str: string = x.toString();
    let tempr: string = '';
    for (let temp of str ) {
        tempr = temp + tempr;
    };
    const result: boolean = (str == tempr) ? true : false;
    return result;
};