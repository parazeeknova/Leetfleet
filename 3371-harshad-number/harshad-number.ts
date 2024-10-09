function sumOfTheDigitsOfHarshadNumber(x: number): number {
    const digits = x.toString().split('');
    const sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);
    return (x % sum === 0) ? sum : -1;
};