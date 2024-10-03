function isPalindrome(x: number): boolean {
    let tempr: string = '';
    for (let temp of x.toString() ) {
        tempr = temp + tempr;
    };
    return (x.toString() == tempr);
};