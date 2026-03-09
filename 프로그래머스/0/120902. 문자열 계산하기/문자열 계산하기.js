function solution(my_string) {
    const arr = my_string.split(' ')
    let answer = arr[0]
    
    for (let i = 1; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            answer += arr[i]
            continue
        } 
        
        if (arr[i - 1] === '+') {
            answer = Number(answer) + Number(arr[i])
            continue
        }
        
        if (arr[i - 1] === '-') {
            answer = Number(answer) - Number(arr[i])
            continue
        }
    }
   
    
    return answer;
}