function plusOne(digits: number[]): number[] {
    const numberString: bigint = BigInt(digits.join("")) + BigInt(1);
    return Array.from(String(numberString)).map(Number);
};