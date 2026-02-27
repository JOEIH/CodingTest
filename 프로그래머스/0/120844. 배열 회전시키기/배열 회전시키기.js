function solution(numbers, direction) {
    var answer = [];
    
    if (direction === "right") {
        let last = numbers.pop()
        return [last, ...numbers]
    }
    
    let first = numbers.shift()
    return [...numbers, first]
}