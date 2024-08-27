function solution(array, commands) {
    let answer = []
    for(let i = 0; i < commands.length; i++) {
        let num = []
        let arr = commands[i];
        num = array.slice(arr[0] - 1, arr[1]).sort((a,b) => a - b);
        answer.push(num[arr[2]-1])
        
    }
    return answer
}