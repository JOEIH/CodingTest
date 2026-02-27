function solution(numbers, k) {
    // 공을 넘겨준 횟수: k - 1
    // 한 번에 이동하는 칸 수: 2
    // 총 이동한 칸 수: (k - 1) * 2
    
    return numbers[((k - 1) * 2) % numbers.length];
}