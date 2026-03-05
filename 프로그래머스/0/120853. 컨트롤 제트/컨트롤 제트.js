function solution(s) {
    let sum = 0
    let arr = s.split(' ')
    
    for (let i in arr) {
        if (arr[i] === 'Z') {
            sum -= parseInt(arr[i-1])
            continue
        }
        sum += parseInt(arr[i])
    }
    
    return sum
} 