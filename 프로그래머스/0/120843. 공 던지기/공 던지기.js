function solution(numbers, k) {
    let curr = 0
    
    while (k - 1 > 0) {
        k--;
        curr = (curr + 2) % numbers.length
    }
    
    return numbers[curr]
}