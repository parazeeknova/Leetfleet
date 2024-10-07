function minLength(s: string): number {
    let minimum: string = s;
    while (minimum.includes("AB") || minimum.includes("CD")) {
        if (minimum.includes("AB")) {
            minimum = minimum.replaceAll("AB", "");
        };
        if (minimum.includes("CD")) {
            minimum = minimum.replaceAll("CD", "");
        };
    };
    return minimum.length;
};