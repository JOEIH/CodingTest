function solution(s) {
    var answer = []
    let obj = {};
    
    for (let i of s) {
        if (!(i in obj)) obj[i] = 0
        obj[i] += 1
    }
    
    for (let i in obj) {
        if (obj[i] == 1) answer.push(i)
    }
    
    return answer.sort().join('');
}