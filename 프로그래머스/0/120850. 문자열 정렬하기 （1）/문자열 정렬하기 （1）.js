function solution(my_string) {
    var answer = [];
    
    for (let ch of my_string) {
        let numCh = Number(ch)
        if (!isNaN(numCh)) answer.push(numCh)
    }
    
    return answer.sort((a, b) => a - b);
}