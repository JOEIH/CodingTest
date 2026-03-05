function solution(order) {
    var answer = 0
    const arr = order.toString().split('').map(v => Number(v))
    
    for (let i of arr) {
        if (i === 9) {
            answer += 1
            continue
        } else if (i === 6) {
            answer += 1
            continue
        } else if (i === 3) {
            answer += 1
            continue
        }
    }
    
    return answer
}