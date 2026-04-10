function solution(clothes) {
    const obj = {}
    let answer = 1;
    for (let [name, type] of clothes) {
        obj[type] = (obj[type] || 0) + 1;
    }
    
    for (let i of Object.values(obj)) {
        answer *= (i + 1);
    }
    
    return answer - 1;
}