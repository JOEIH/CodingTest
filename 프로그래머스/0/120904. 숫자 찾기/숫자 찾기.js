function solution(num, k) {
    const answer = num.toString().indexOf(String(k))
    return answer === -1 ? -1 : answer + 1;
}