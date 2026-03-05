function solution(array, n) {
    const arr = [...new Set(array.sort((a, b) => a - b))];
    
    let answer = arr[0]
    for (let i = 1; i < arr.length; i++) {
        let cur = Math.abs(answer - n);
        if (Math.abs(n - arr[i]) >= cur) break;
        answer = arr[i];
    }
    
    return answer
}