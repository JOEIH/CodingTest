function solution(array, n) {
    // 거리를 기준으로 오름차순 정렬하고, 거리가 같다면 숫자 크기를 기준으로 오름차순 정렬
    return array.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || a - b)[0];
}