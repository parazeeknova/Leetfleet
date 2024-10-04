function dividePlayers(skill: number[]): number {
    const sortedSkill: number[] = skill.sort((x,y) => x - y);
    let teamsArr: number[][] = [];
    let product: number;
    let team: number[] = [];
    let chemistry: number[] = [];

    if (sortedSkill.length == 2) {
        product = 1;
        sortedSkill.forEach(i => {
            product *= i;
        });
        return product;
    } else {

        while (sortedSkill.length > 0) {
            const weakling: number = sortedSkill.shift();
            const stronk: number = sortedSkill.pop();
            teamsArr.push([weakling, stronk]);
        };

        for (let k = 0; k < teamsArr.length; k++) {
            team.push(teamsArr[k][0] + teamsArr[k][1]);
        };

        if (team.every(x => x === team[0])) {
            for (let k = 0; k < teamsArr.length; k++) {
                chemistry.push(teamsArr[k][0] * teamsArr[k][1]);
            };

            product = 0;
            chemistry.forEach(i => {
                product += i;
            });
            return product;
        } else {
            return -1;
        };
    };
};