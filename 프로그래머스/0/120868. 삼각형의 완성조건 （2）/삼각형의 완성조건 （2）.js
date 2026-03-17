function solution(sides) {
    var answer = 0;
    
    let arr_max = Math.max(...sides);
    let arr_min = Math.min(...sides);
    
    // 가장 긴 변이 배열 안 요소인 경우
    answer += arr_max - (arr_max - arr_min);
    
    // 가장 긴 변이 배열 밖 요소인 경우
    answer += (arr_max + arr_min) - arr_max - 1
    
    return answer;
}