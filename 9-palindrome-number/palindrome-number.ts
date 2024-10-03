function isPalindrome(x: number): boolean {
    const str: string = x.toString();
    let tempr: string = '';
    for (let temp of str) {
        tempr = temp + tempr;
    };
    return (str == tempr);
};