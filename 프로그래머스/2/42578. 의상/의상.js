function solution(clothes) {
    const obj = {}
    let answer = 1;
    for (let [name, type] of clothes) {
        obj[type] = (obj[type] || 0) + 1;
    }
    
    for (let key in obj) {
        answer *= (obj[key] + 1);
    }
    
    return answer - 1;
}