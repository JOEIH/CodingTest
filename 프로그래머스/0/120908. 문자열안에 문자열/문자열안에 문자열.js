function solution(str1, str2) {
    let answer = 2;
    let cur = '';
    
    for (let i of str1) {
        cur += i
        
        if (cur.indexOf(str2) === -1) {
            continue;
        } else {
            answer = 1;
            break;
        }
    }
    
    return answer;
}