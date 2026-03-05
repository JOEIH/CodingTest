function solution(s) {
    // 스택을 사용한 풀이
    const arr = s.split(' ')
    let stack = []
    
    for (let cur of arr) {
        if (cur === 'Z') {
            stack.pop()
            continue
        }
        stack.push(parseInt(cur))
    }
    
    return stack.reduce((acc, cur) => acc + cur, 0)
} 