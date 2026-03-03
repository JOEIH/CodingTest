function solution(n) {
    var answer = 0
    for (let i = 2; i <= n; i++) {
        let num = Math.sqrt(i);
        let isComposite = false;
        
        for (let j = 2; j <= Math.floor(num); j++) {
            if (i % j == 0) {
                isComposite = true
                break;
            }
        }
        
        if (isComposite) answer++
    }
    return answer;
}