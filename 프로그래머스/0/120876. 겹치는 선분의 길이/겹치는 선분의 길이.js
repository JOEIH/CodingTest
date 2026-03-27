function solution(lines) {
    const check = Array(201).fill(0); 

    for (let [x, y] of lines) {
        for (let i = x; i < y; i++) {
            check[i + 100]++; 
        }
    }

    return check.filter(v => v >= 2).length;
}