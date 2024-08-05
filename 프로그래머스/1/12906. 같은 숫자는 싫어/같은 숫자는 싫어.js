function solution(arr) {
    let answer = [];
    
    //다음 요소와 같은 값이면 계속, 다른 값이면 arr에 추가
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            continue
        } else {
            answer.push(arr[i]);
        }
    }
    return answer;
}