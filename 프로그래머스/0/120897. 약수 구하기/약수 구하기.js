function solution(n) {
    const answer = []
    
    for (let i = 1; i * i <= n; i++){
        if (i * i == n) {
            answer.push(i)
        } else if (n % i == 0) {
            answer.push(i, Math.floor(n / i))
        }
    }
    
    return answer.sort((a, b) => a - b);
}