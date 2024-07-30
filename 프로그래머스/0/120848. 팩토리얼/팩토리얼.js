function solution(n) {
    var answer = 0;
    //팩토리얼 결과값 저장할 store
    let store = 1;
    
    while(store <= n) {
        answer++;
        store *= answer;
    }
    
    if (store == n) {
        return answer;
    } else if (store/answer < n < store) {
        return answer - 1;
    }
     
}

