function solution(my_string) {
    var answer = [];
    
    for (let ch of my_string) {
        let numCh = Number(ch)
        if (Number.isInteger(numCh)) answer.push(numCh)
    }
    
    return answer.sort((a, b) => a - b);
}