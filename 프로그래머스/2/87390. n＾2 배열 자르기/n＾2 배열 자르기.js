function solution(n, left, right) {
    let answer = []
    let row = 0;
    let col = 0

    for (let i = left; i <= right; i++) {
        row = Math.floor(i / n)
        col = i % n
        
        answer.push(Math.max(row,col)+1)
    }
    
    return answer
}