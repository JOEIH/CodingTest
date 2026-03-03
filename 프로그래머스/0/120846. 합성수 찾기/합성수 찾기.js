function solution(n) {
    var answer = 0
    for (let i = 2; i <= n; i++) {
        let num = Math.sqrt(i)
        let count = 0
        
        if (Number.isInteger(num)) {
            answer++
            continue
        }
        
        for (let j = 1; j <= Math.floor(num); j++) {
            if (i % j == 0) count++
        }
        
        if (count >= 2) answer++
    }
    return answer;
}