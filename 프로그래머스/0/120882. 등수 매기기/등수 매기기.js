function solution(score) {
    const totals = score.map(v => v[0] + v[1]);
    const sortedTotals = [...totals].sort((a, b) => b - a);
    
    const rankMap = new Map();
    
    sortedTotals.forEach((score, index) => {
        if (!rankMap.has(score)) {
            rankMap.set(score, index + 1);
        }
    });
    
    return totals.map(score => rankMap.get(score));
}