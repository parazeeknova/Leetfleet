function strStr(haystack: string, needle: string): number {
    if (haystack.includes(needle)) {
        const occurrence: number = haystack.indexOf(needle);
        return occurrence;
    } else {
        return -1;
    };
};