function solution(answers) {
    var result = [];

    let one = [1,2,3,4,5];
    let two = [2,1,2,3,2,4,2,5];
    let three = [3,3,1,1,2,2,4,4,5,5];
    let compare = [0, 0, 0]
    
    function correctCnt(arr) {
        let cnt = 0;
        let j = 0;
        for(let i = 0; i < answers.length; i++) {
            if(j == arr.length) j = 0;
            if(arr[j] == answers[i]) cnt++;
            j++;
        }
        return cnt;
    }
    
    let max = Math.max(correctCnt(one), correctCnt(two), correctCnt(three))
    
    if(max == correctCnt(one)) {
        compare[0] += 1
    } 
    if (max == correctCnt(two)) {
        compare[1] += 1
    } 
    if (max == correctCnt(three)) {
        compare[2] += 1
    }
    
    for(let i = 0; i < compare.length; i++) {
        if(compare[i] == 1) {
            result.push(i+1)
        }
    }
    
    return result
}