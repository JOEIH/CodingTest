function solution(n) {
    let arr = new Array(n+1).fill(true).fill(false, 0, 2);

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }
    
    //참인 값만 반환해 새로 생성한 배열 answer에 넣은 후 길이 = 소수의 개수 구하기
    let answer = arr.filter(el => el).length
    
    return answer
}
