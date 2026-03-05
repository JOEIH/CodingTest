function solution(my_string) {
    const stringSet = new Set();
    var answer = ''
    
    for (let i of my_string) {
        if (stringSet.has(i)) continue
        stringSet.add(i)
        answer += i
    }

    return answer;
}