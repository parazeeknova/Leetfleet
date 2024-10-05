function lengthOfLastWord(s: string): number {
    const lastWordArr: string[] = s.split(" ");
    const lastWord: string = lastWordArr[lastWordArr.length - 1];
    if (lastWord !== "") {
        return lastWord.length;
    } else {
        const rmWhitespace: string[] = lastWordArr.filter(i => i !== '');
        return rmWhitespace[rmWhitespace.length - 1].length;
    };
};