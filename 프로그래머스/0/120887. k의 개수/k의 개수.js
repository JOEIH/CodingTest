function solution(i, j, k) {
    let answer = 0;
    
    for (let cur = i; cur <= j; cur++) {
        for (let num of String(cur)) {
            if (num === String(k)) answer++;
        }
    }
    return answer;
}