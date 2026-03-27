function solution(lines) {
    const [[x1, x2], [x3, x4], [x5, x6]] = lines;
    const min_start = Math.min(x1, x3, x5);
    const max_end = Math.max(x2, x4, x6);
    
    const check = Array(max_end - min_start + 1).fill(0);
    
    for (let [x, y] of lines) {
        for (let i = x; i < y; i++) {
            check[i - min_start]++;
        }
    }
    
    return check.filter(v => v >= 2).length;
}