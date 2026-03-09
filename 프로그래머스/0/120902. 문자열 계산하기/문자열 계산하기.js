function solution(my_string) {
    // 공백 기준으로 나누기 때문에 항상 [숫자, 연산자, 숫자, 연산자...] 형태
    const arr = my_string.split(' ') 
    let answer = Number(arr[0])
    
    for (let i = 1; i < arr.length; i+=2) {
        if (arr[i] === '+') {
            answer += Number(arr[i + 1])
        } else if (arr[i] === '-') {
            answer -= Number(arr[i + 1])
        }
    }
   
    return answer;
}