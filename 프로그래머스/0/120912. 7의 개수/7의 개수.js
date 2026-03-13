function solution(array) {
    var answer = 0
    
    for (let i of array) {
        let string_i = i.toString()
        for (let j of string_i) {
            j === '7' ? answer += 1 : answer;
        }
    }
    
    return answer;
}